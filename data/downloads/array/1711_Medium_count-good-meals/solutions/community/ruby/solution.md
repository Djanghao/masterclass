# ✅✅ Beats 100% || RUBY || Easy to understand || 🔥🔥 || 1711. Count Good Meals ||

**Author:** poojalmokariya
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/3804666/](https://leetcode.com/problems/count-good-meals/solutions/3804666/)

---

# Approach
- Hash
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(22\u2217N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} deliciousness
# @return {Integer}
def count_pairs(deliciousness)
    hash_d={}
    count=0
    for i in deliciousness
        hash_d[i]=0 if hash_d.length==0
        for j in (0...22)
            if hash_d[(2**j)-i]
                count += hash_d[(2**j)-i]
            end
        end
        if hash_d[i] || hash_d[i]==0
            hash_d[i]+=1
        else
            hash_d[i]=1
        end
    end
    return count % ((10**9)+7)
end
```