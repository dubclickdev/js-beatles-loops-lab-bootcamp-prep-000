function theBeatlesPlay(musicians, instruments){
  var results = []

  for (var i = 0; i < musicians.length; i++){
    let musician = musicians[i]
    let instrument = instruments[i]
    results.push(`${musician} plays ${instrument}`)
  }
  return results
}
function johnLennonFacts(facts){
  var results = []

  for (var i = 0; i < facts.length; i++){
    var fact = facts[i]
    results.push(fact + "!!!")
  }
  return results
}
