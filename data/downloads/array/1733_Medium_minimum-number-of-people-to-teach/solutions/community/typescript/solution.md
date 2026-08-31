# O(M*N) Greedy solution using Set

**Author:** vgvishesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/5177033/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/5177033/)

---


# Complexity
- Time complexity:
O(M*N)

- Space complexity:
O(M)

# Code
```
function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    function createFriendsLanguageSets() {
      let friendsLanguageSets: Set<number>[] = new Array(1);
      for (let i = 0; i < languages.length; i++) {
        let fLangs = new Set<number>();
        languages[i].forEach(x => fLangs.add(x));
        friendsLanguageSets.push(fLangs);
      }
      return friendsLanguageSets;

    }

    function findFriendsWithNoLanguage(languages: number[][], friendships: number[][], friendsLanguageSets: Set<number>[]) {
      let friendsWithNoLanguage: number[][] = new Array(1);
      for (let i = 0; i < friendships.length; i++) {
        let f1Langs = friendsLanguageSets[friendships[i][0]]
        let f2Langs = friendsLanguageSets[friendships[i][1]];

        let canTalk = false;
        for (let lang of f1Langs.keys()) {
          if (f2Langs.has(lang)) {
            canTalk = true;
            break;
          }
        }
        if (!canTalk) {
          friendsWithNoLanguage.push(friendships[i]);
        }
      }
      return friendsWithNoLanguage;
    }

    let friendsLanguageSets = createFriendsLanguageSets();
    let brokenFriendships = findFriendsWithNoLanguage(languages, friendships, friendsLanguageSets);

    let i = 1;
    let min = Number.MAX_VALUE;
    while (i <= n) {
      let count = 0;
      let visitedFrinds = new Set<number>();
      for (let j = 1; j < brokenFriendships.length; j++) {
        let f1 = brokenFriendships[j][0];
        let f2 = brokenFriendships[j][1];
        if (!friendsLanguageSets[f1].has(i) && !visitedFrinds.has(f1)) {
          visitedFrinds.add(f1);
          count++;
        }
        if (!friendsLanguageSets[f2].has(i) && !visitedFrinds.has(f2)) {
          visitedFrinds.add(f2);
          count++;
        }
      }
      if (count < min) {
        min = count;
      }
      i++;
    }
    return min;
};
```