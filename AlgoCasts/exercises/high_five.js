var highFive = function(items) {
  const users = items.reduce((total, item) => {
    const user = item[0]
    const grade = item[1]
    if (total.hasOwnProperty(user)) {
      total[user].push(grade)
    } else {
      total[user] = [grade]
    }
    return total
  }, {})

  return Object.keys(users).reduce((total,user) => {
    const grades = users[user].sort((a, b) => b-a).slice(0,5)
    const gradeAvg = grades.reduce((avg,grade) => avg + grade, 0) /5
    total.push([user, Math.floor(gradeAvg)])
    return total
  },[])
};

console.log(highFive( [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))
