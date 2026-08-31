# Typescript | Fast Trie solution

**Author:** richardearl
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1568800/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1568800/)

---

```

function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const trie = new STrie('');
  words.forEach(w => trie.insert(w));

  var ret: number[] = new Array(puzzles.length).fill(0);
  for (let i = 0; i < puzzles.length; i++) {
    let puzzle = puzzles[i];
    ret[i] = getPuzzleCount(trie, puzzle);
  }

  return ret;
};


function getPuzzleCount(trieMaster: STrie, puzzle: string): number {
  var p = puzzle.split('').sort();
  var tries: Set<STrie> = new Set();
  tries.add(trieMaster);

  for (let i = 0; i < p.length; i++) {
    let l = p[i];

    var newTries: STrie[] = [];

    tries.forEach(trie => {
      if (trie.children.has(l))
        newTries.push(trie.children.get(l)!);
    });

    newTries.forEach(t => tries.add(t));
  }


  var count = 0;
  tries.forEach((trie) => {

    if (!trie.end.length) return;
    count += trie.end.filter(e => e.includes(puzzle.charAt(0))).length;
  });

  return count;
}

class STrie {
  v: string;
  children: Map<string, STrie>;
  end: string[];

  constructor(v: string) {
    this.v = v;
    this.children = new Map();
    this.end = [];
  }

  insert(string: string) {
    let set = new Set(string.split('').sort());
    let t: STrie = this;

    set.forEach(s => {
      if (!t.children.has(s))
        t.children.set(s, new STrie(s));
      t = t.children.get(s)!;
    })

    t.end.push(string);
  }
}
```