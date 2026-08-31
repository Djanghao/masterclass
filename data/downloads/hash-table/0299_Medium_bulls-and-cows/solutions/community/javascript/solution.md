# JavaScript solution

**Author:** linfongi
**Votes:** 25
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/74765/](https://leetcode.com/problems/bulls-and-cows/solutions/74765/)

---

    function getHint(secret, guess) {
      var map = {};
      var A = 0;
      var B = 0;
      for (var i = 0; i < 10; i++) map[i] = 0;
      for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) A++;
        else {
          map[secret[i]]++;
          B += map[secret[i]] <= 0 ? 1 : 0;
          map[guess[i]]--;
          B += map[guess[i]] >= 0 ? 1 : 0;
        }
      }
      return A + 'A' + B + 'B';
    }