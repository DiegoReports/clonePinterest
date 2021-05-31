const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  grid.classList.add('active') // Manipulando a classe do CSS

  gridColumns.forEach(element => {
    element.classList.remove('animate-before', 'animate-after')
  })

  heading.classList.remove('animate-before', 'animate-after')

}

function exitScreen(index, exitDelay) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  gridColumns.forEach(element => {
    element.classList.add('animate-after')
  })
  
  heading.classList.add('animate-after')

  setTimeout(() =>{
    grid.classList.remove('active')
  }, exitDelay)
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
  const cycleTime = timePerScreen + exitDelay;
  let nextIndex = 0

  function nextCycle() {
    const currentIndex = nextIndex

    enterScreen(currentIndex)

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

    // Telas que temos a mostrar 4 = 0,1,2,3
    nextIndex = nextIndex >= grids.length -1 ? 0 : nextIndex + 1 // Operador ternário: Vamos analisar se o index chegou em 4 (ñ existe)
  }

  setInterval(nextCycle, cycleTime);
}

setupAnimationCycle({
  timePerScreen: 2000, //Milisegundos
  exitDelay: 200 * 7 //Tempo total da saida de cada coluna
})