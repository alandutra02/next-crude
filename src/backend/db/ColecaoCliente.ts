import firebase from "../config"
import Cliente from "@/app/core/Cliente"
import ClienteRepositorio from "@/app/core/ClienteRepositorio"

export default class ColecaoCliente implements ClienteRepositorio {
  private conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot): Cliente {
      const dados = snapshot.data() as { nome: string; idade: number }    
      return new Cliente(dados.nome, dados.idade, snapshot.id)
    }
  }

  private colecao() {
    return firebase.firestore()
      .collection("clientes")
      .withConverter(this.conversor as any) // ou tipar com FirestoreDataConverter<Cliente>
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente)
      return cliente
    } else {
      const docRef = await this.colecao().add(cliente)
      const doc = await docRef.get()
      const dados = doc.data() as { nome: string; idade: number }
      return new Cliente(dados.nome, dados.idade, doc.id)
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    await this.colecao().doc(cliente.id).delete()
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get()
    return query.docs.map(doc => {
      const dados = doc.data() as { nome: string; idade: number }
      return new Cliente(dados.nome, dados.idade, doc.id)
    })
  }
}
