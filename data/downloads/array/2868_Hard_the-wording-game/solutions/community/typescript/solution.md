# eazy javascript solution with comments

**Author:** jedmeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-wording-game/solutions/4097612/](https://leetcode.com/problems/the-wording-game/solutions/4097612/)

---

```
function canAliceWin(a: string[], b: string[]): boolean {
    const words = [
        new Array(26).fill(''),
        new Array(26).fill(''),
    ];

    // for each letter, only the lexicographically biggest word is useful
    for (const w of a) {
        words[0][w.charCodeAt(0) - 97] = w;
    }
    
    for (const w of b) {
        words[1][w.charCodeAt(0) - 97] = w;
    }

    // find the smallest word for Alice
    let i = words[0].findIndex(word => !!word);

    // 0 for Alice and 1 for Bob
    // we choose Alice's first world initially, so it\u2018s Bob's turn now
    let turn: 0 | 1 = 1;

    // iterate each letter, until we find a winner
    while (true) {
        // if the current player has a word that has the same first letter as 
        // and lexicographically greater than the opponent's word, choose it
        // if not, but he has a word with the next first letter, choose it
        // prioritize identical letters because the opponent may not 
        // have a word starting with the next letter.
        // for example:
        // player a: aa ca
        // player b: ab bb
        // player b choose ab and win
        if (words[turn][i] && words[turn][i] > words[1 - turn][i]) {
            // noop
        } else if (words[turn][i + 1]) {
            i++;
        } else {
            // no words to choose, game over
            // if Bob's turn, Alice wins and vice versa
            return turn === 1;
        }
        turn = 1 - turn as 0 | 1;
    }
};
```