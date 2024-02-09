const perguntas = [
    {
      pergunta: "Qual jogador detém o recorde de mais pontos marcados em uma única partida na história da NBA?",
      respostas: [
        "Michael Jordan",
        "Wilt Chamberlain",
        "Kobe Bryant"
      ],
      correta: 1
    },
    {
      pergunta: "Quantos títulos da NBA o Los Angeles Lakers conquistou até 2022?",
      respostas: [
        "16",
        "17",
        "18"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o único jogador a conquistar o prêmio de MVP das Finais da NBA enquanto jogava pelo time perdedor?",
      respostas: [
        "Jerry West",
        "LeBron James",
        "Allen Iverson"
      ],
      correta: 0
    },
    {
      pergunta: "Qual equipe detém o recorde de mais títulos consecutivos da NBA?",
      respostas: [
        "Chicago Bulls",
        "Boston Celtics",
        "Los Angeles Lakers"
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador foi apelidado de 'The Admiral' durante sua carreira na NBA?",
      respostas: [
        "Kareem Abdul-Jabbar",
        "Hakeem Olajuwon",
        "David Robinson"
      ],
      correta: 2
    },
    {
      pergunta: "Qual cidade é conhecida como 'Terra do Basquete' e abriga o Hall da Fama do Basquete?",
      respostas: [
        "Chicago",
        "Los Angeles",
        "Springfield"
      ],
      correta: 2
    },
    {
      pergunta: "Qual jogador possui o recorde de mais triplos-duplos na história da NBA?",
      respostas: [
        "LeBron James",
        "Russell Westbrook",
        "Magic Johnson"
      ],
      correta: 1
    },
    {
      pergunta: "Qual time foi o primeiro a conquistar três títulos consecutivos da NBA?",
      respostas: [
        "Boston Celtics",
        "Chicago Bulls",
        "Los Angeles Lakers"
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador foi apelidado de 'The Answer' durante sua carreira na NBA?",
      respostas: [
        "Allen Iverson",
        "Shaquille O'Neal",
        "Tim Duncan"
      ],
      correta: 0
    },
    {
      pergunta: "Quem detém o recorde de mais bloqueios na história da NBA?",
      respostas: [
        "Hakeem Olajuwon",
        "Dikembe Mutombo",
        "Kareem Abdul-Jabbar"
      ],
      correta: 1
    }
  ];
  
      const quiz = document.querySelector('#quiz')
      const template = document.querySelector('template')
     
      const corretas = new Set()
      const totalDePerguntas = perguntas.length
      const mostraTotal = document.querySelector('#acertos span')
      
  
      // loop ou laco de repeticao
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-'
      +perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete.item
      if(estaCorreta){
        corretas.add(item)
      }
      mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
      }
       
      quizItem.querySelector('dl dt').remove()
  
    
      quiz.appendChild(quizItem)
    }