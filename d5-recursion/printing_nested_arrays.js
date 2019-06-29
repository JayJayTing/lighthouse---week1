function printItems(array) {
    for (item of array) {
      if(Array.isArray(item))
      {
          printItems(item);
      }else
      {
          console.log(item);
      }
    }
  }
  
  //const array = ["😎", "💩", "🤗", "😼", "😂"];
  const array = ["😎", [["💩", "🤗"],"💩", "🤗"], "😼", "😂"];
  printItems(array);