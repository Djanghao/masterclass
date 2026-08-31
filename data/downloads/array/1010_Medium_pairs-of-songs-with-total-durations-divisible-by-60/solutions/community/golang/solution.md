# Python/JS/Go/C++ O(n) by Hashmap // Two-sum [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 7
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/964386/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/964386/)

---

Python O(n) by remainder and dictionary

---

**Hint & abstract model**:

This one is similar to classical [**two-sum problem**](https://leetcode.com/problems/two-sum/). where math objective function is **x + y = target**

The difference is that what we want this time is **(x + y) % 60** = **target** = **0**

---

**Implementation**

in **Python**:
```
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        
        # key: remainder of mod 60
        # value: occurrence of remainder
        congruence_record = defaultdict(int)
        
        mod_60 = lambda x: x % 60
        
        pair_count = 0
        

        for song_duration in map(mod_60, time):    
            
            complement = mod_60( 60 - song_duration )
            
            # update pair count
            pair_count += congruence_record.get(complement, 0)
            
            # update occurrence of remainder
            congruence_record[ song_duration ] += 1
            
            
        return pair_count
```

---

in **Javascipt**:
<details>
	<summary> Expand to show source code </summary>

```
var numPairsDivisibleBy60 = function(time) {
    
    var mod_60 = ( x => x % 60 );
    
    // key: remainder of mod 60
    // value: occurrence of remainder
    let congurenceDict = {}
    
    // counter of ( song i + song j ) % 60 == 0 
    let pairCount = 0
    
   
   for(const remainder of time.map( mod_60 ) ){     
       
        complement = mod_60( 60 - remainder );
        
        // update pair count with complement
        pairCount += congurenceDict[complement] || 0;
        
       // update occurrence of current remainder
        congurenceDict[remainder] = (congurenceDict[remainder] || 0) + 1;
        
    }

    return pairCount;
};
```

</details>

---

in **Go**:

<details>
	<summary> Expand to show source code </summary>
	
```
func numPairsDivisibleBy60(time []int) int {
    
    // key: remainder of mod 60
    // value: occurrence of remainder
    congruenceMap := make(map[int]int)
    
    piarCount := 0
    
    for _, number := range time{
        
        // Apply two-sum model with objective is (x + y) % 60 = 0
        
        remainder := number % 60
        complement := ( 60 - remainder ) % 60
        
        // update pair count
        piarCount += congruenceMap[complement]
        
        // update occurrence of current remainder
        congruenceMap[remainder] += 1
    }
    
    return piarCount
}
```

</details>


---
in **C++**:

<details>
	<summary> Expand to show source code </summary>
	
```
class Solution {
public:
    int numPairsDivisibleBy60(vector<int>& time) {
        
        auto mod_60 = [](int x) { return x % 60 ; };
        
        int pairCount = 0;
        
        for( int songDuration : time){
            
            // // Apply two-sum model with objective is (x + y) % 60 = 0
            
            int remainder = mod_60( songDuration);
            int complement = mod_60( 60 - remainder );
            
            // update pairCount with complement
            pairCount += remainderOcc[ complement ];
            
            // update occurrence of current remainder
            remainderOcc[ remainder ] += 1;
        }
        
        return pairCount;
    }
    
private:
    map<int, int> remainderOcc;
};
```
</details>

---

Related Leetcode challenge:

[Leetcode #1 Two Sum](https://leetcode.com/problems/two-sum/)

[Leetcode #1865 Finding Pairs With a Certain Sum](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/) 

---

Reference:

[1] [Python official docs about dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

[2] [MDN: Javascript official docs about map & functional programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[3] [Go offical docs about map (i.e., the so-called dictionary)](https://go.dev/blog/maps)

[4] [CPP Reference about lambda function](https://en.cppreference.com/w/cpp/language/lambda)