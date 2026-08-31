# Simple

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/5584379/](https://leetcode.com/problems/design-phone-directory/solutions/5584379/)

---

# Intuition Use array for used and free numbers
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class PhoneDirectory {
bool []a;
    public PhoneDirectory(int m) {
        a= new bool[m];
    }
    
    public int Get() {
        for (int i=0; i< a.Length; i++){
            if(!a[i]){a[i]=true; return i;}
        }
        return -1;        
    }
    
    public bool Check(int n) {
        if(a[n])return false;
        return true;
        
    }
    
    public void Release(int n) {
        a[n]=false;
        
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * PhoneDirectory obj = new PhoneDirectory(maxNumbers);
 * int param_1 = obj.Get();
 * bool param_2 = obj.Check(number);
 * obj.Release(number);
 */
```