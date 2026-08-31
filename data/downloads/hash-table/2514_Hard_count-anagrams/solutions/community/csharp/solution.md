# C# One Pass O(n) strict forward solution

**Author:** AymenDaoudi
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/4033701/](https://leetcode.com/problems/count-anagrams/solutions/4033701/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
public class Solution {
    private Dictionary<char, (long f, int c)> reps = new();
    private int modulo = ((int)Math.Pow(10, 9) + 7);

    public int CountAnagrams(string s) {
        
        s = s + ' '; 
        var sz = s.Length;
        var j = -1;
        long factorial = 1;
        long result = 1;
        long denominator = 1;

        for(int i = 0; i < sz; i++)
        {            
            if(s[i] is ' ')
            {
                j = i;
                result = (result * factorial) % modulo;
                foreach(var k in reps.Keys)
                {
                    if(reps[k].c > 1) denominator = (denominator * reps[k].f) % modulo;
                }
                factorial = 1;
                reps = new Dictionary<char, (long f, int c)>();
            }
            else
            {
                factorial = (factorial * (i - j)) % modulo;
                if(!reps.TryAdd(s[i], (1, 1)))
                {
                    var next = (reps[s[i]].f, reps[s[i]].c + 1);
                    next = ((reps[s[i]].f * next.Item2) % modulo, next.Item2);
                    reps[s[i]] = next;
                }
            }
        }

        //compute fermat modular inverse of denominator 
        long exp = Expentiation(denominator, modulo - 2, modulo);

        result = (result * exp) % modulo;

        return (int)(result % modulo);
    }

    //Some math thing I don't what the hell is
    public long Expentiation(long @base, int exp, int m)
    {
        long result = 1;
        while (exp > 0)
        {
           if ((exp & 1) > 0) result = (result * @base) % m;
            exp >>= 1;
            @base = (@base * @base) % m;
        }

        return result;
    }
}

//457992974

// "too hot"
// "oooooo"
// "the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmqokzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq the cheese is too cheesy okzojaporykbmq"
// "b okzojaporykbmq tybq zrztwlolvcyumcsq jjuowpp"
// "okzojaporykbmqokzojaporykbmq"
// "smuiquglfwdepzuyqtgujaisius"
```