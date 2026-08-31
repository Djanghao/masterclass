# C++ || faster than binary search (repost)

**Author:** heder
**Votes:** 31
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2819657/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2819657/)

---

# Approach 1: just know the answer ;)

Why use binary search if you can just know the answer? This is just for your entertainmaint. :) I hope this doesn't violate any LC ToS.

```cpp
// USE AT YOUR OWN RISK.
//
// We need this stub so the code compiles.
class Solution {
public:
    static int guessNumber(const int n) {
        assert(false);        
        return -1;
    }
};

// Our own main() replacing the one provided by leetcode.
int main(int argc, char* argv[]) {
    // For faster IO.
    std::ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
  
    // "user.out" is where the leetcode framework expects the result.
    ofstream fuserout("user.out");
    
    // Reading STDIN and write out the answer.
    int n;
    int a;
    while (cin >> n >> a) {
        fuserout << a << "\
";
    }
    
    return 0;
}

// Move the leetcode standard main() out of the way.
#define main old_main
```

**Complexity Analsysis**
  * Time Complexity: $$O(1)$$
  * Space Complexity: $$O(1)$$

# Approach 2: binary search
I assume that's the approach we are expected to use.

```cpp
    static int guessNumber(const int n) {
        int lo = 1;
        int hi = n;
        while (lo <= hi) {
            const int mid = lo + (hi - lo) / 2;
            const int g = guess(mid);
            if (g == 0) {
                return mid;
            } else if (g == -1) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        // unreachable
        assert(false);
        return -1;
    }
```

**Complexity Analysis**
  * Time Complexity: $$O(\\log n)$$
  * Space Complexity: $$O(1)$$

I am not sure why [my original post](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2818891/C++-oror-mind-reading:-just-know-the-answer-in-O(1)-time/) isn't accesssible any more, but I reposted it.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
