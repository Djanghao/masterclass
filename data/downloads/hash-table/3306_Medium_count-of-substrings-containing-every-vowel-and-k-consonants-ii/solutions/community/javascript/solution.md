# A switch O(n) / O(1)

**Author:** cookster
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5897565/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5897565/)

---

# Code
```javascript []
function countOfSubstrings(word, k) {
  return atMost(word, k) - atMost(word, k - 1);
}

function atMost(word, k) {
  let a = 0, e = 0, i = 0, o = 0, u = 0;
  let count = 0;
  for (let l = 0, r = 0; r<word.length; r++) {
    switch (word[r]) {
      case 'a': a++; break;
      case 'e': e++; break;
      case 'i': i++; break;
      case 'o': o++; break;
      case 'u': u++; break;
      default : k--; 
    }

    while (a&&e&&i&&o&&u && k<0) {
      switch (word[l++]) {
        case 'a': a--; break;
        case 'e': e--; break;
        case 'i': i--; break;
        case 'o': o--; break;
        case 'u': u--; break;
        default : k++; 
      }
    }
    count += r - l + 1;
  }
  return count;
}
```


The only way to break the rule is when all vowels are present and there's more than `k` constants.
Both iterations will overcount the same data so they'll balance out in the end.