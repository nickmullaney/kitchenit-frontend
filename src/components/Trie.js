
// Call 'insertWord' to load the possible words into the data structure
// Input: The word to be inserted (String)

// Call 'returnPossibleWords' to return an array of possible words given the input
// Input: The prefix or first few letters (String), must contain 2 characters
// Output: Array containing strings

class Trie {
  constructor() {
    this.root = new Node('@');
  }

  insertWord(word) {
    let arr = word.split('');
    let currentNode = this.root;
    for (let i = 0; i < arr.length; i++) {
      let characterExists = false;
      for (let j = 0; j < currentNode.nextElements.length; j++) {
        let nextChar = currentNode.nextElements[j].element;
        if (nextChar.localeCompare(arr[i], undefined, {sensitivity: 'base'}) === 0) {
          currentNode = currentNode.nextElements[j];
          characterExists=true;
          break;
        }
      }

      
      if(!characterExists){
        let position = currentNode.nextElements.length;
        currentNode.nextElements.push(new Node(arr[i]));
        currentNode = currentNode.nextElements[position];
      }
    }
    currentNode.wordEnd = true;
  }

  returnPossibleWords(word){
    let arr = word.split('');
    if(arr.length < 2){
      return [];
    }
    let wordList = [];
    let currentNode = this.root;
    for (let i = 0; i < arr.length; i++){
      let characterExists = false;
      for (let j = 0; j < currentNode.nextElements.length; j++){
        let nextChar = currentNode.nextElements[j].element;
        if (nextChar.localeCompare(arr[i], undefined, {sensitivity: 'base'}) === 0) {
          currentNode = currentNode.nextElements[j];
          characterExists=true;
          break;
        }
      }
      if(!characterExists){
        return [];
      }
    }

    if(currentNode.wordEnd){
      wordList.push(word);
    }

    for (let i = 0; i < currentNode.nextElements.length; i++){
      let newNode = currentNode.nextElements[i];
      let newWord = word + newNode.element;
      this.findPossibleWords(newNode, newWord, wordList);
    }

    return(wordList);
  }

  findPossibleWords(currentNode, currentWord, wordList){
    if(currentNode.wordEnd){
      wordList.push(currentWord);
    }
    if(currentNode.nextElements.length === 0){
      return;
    }

    for (let i = 0; i < currentNode.nextElements.length; i++){
      let newNode = currentNode.nextElements[i];
      let newWord = currentWord + newNode.element;
      this.findPossibleWords(newNode, newWord, wordList);
    }
  }
}

class Node {
  constructor(element) {
    this.wordEnd = false;
    this.element = element;
    this.nextElements = [];
  }
}

export default Trie;
