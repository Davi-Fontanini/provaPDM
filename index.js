let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10 
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

function mostrarNome() {

    for (let i = 0; i < chamadaDeAlunos.length; i++) {

        console.log("Nome: " + chamadaDeAlunos[i].nome)
        
    }

}

function mostrarNota() {

    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        for (let j = 0; j < 2; j++) {
            console.log("Nota: " + chamadaDeAlunos[i].materias[j].nota)
            
        }
    }     
}

function avaliarAluno() {
    
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        for (let j = 0; j < 2; j++) {
            
            if (chamadaDeAlunos[i].materias[j].nota >= 6 && chamadaDeAlunos[i].materias[j].presenca >= 75) {
                
                console.log(chamadaDeAlunos[i].nome + " APROVADO")    
            } else {
                console.log(chamadaDeAlunos[i].nome + " reprovado")
            }
            
        }
        
    }
}


mostrarNome()
mostrarNota()
avaliarAluno()