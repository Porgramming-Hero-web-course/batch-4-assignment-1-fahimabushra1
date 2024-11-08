// problem-6:

const myProfile = <T> (profile : T) => {
    return {...profile}
  }
  const profile1 = myProfile({
      name: "Alice",
      age: 25,
      email: "alice@example.com"
    })
  const profile2 = myProfile({
      name: "Alice",
      age: 26,
      email: "alice@example.com"
    })
    console.log(profile1)
    console.log(profile2)
  