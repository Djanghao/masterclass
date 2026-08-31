# Fast  and  short solution

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/4326150/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/4326150/)

---

```javascript []
var numSub = function(s) {
    return s.split("0").map(a=>a.length*(a.length+1)/2).reduce((a,b)=>a+b,0)  % 1000000007;
};
```
```python []
class Solution(object):
    def numSub(self, s):
        return sum(len(x)*(len(x)+1)//2  for x in s.split("0")) % 1000000007
```
```ruby []
def num_sub(s)
    s.split("0").map{|x| x.size*(x.size+1)/2}.sum % 1000000007
end
```
```php []
class Solution {
    function cnt($x){
        return strlen($x)*(strlen($x)+1)/2;
    }
    function numSub($s) {
       return array_sum(array_map(array($this, 'cnt'),explode("0",$s))) % 1000000007;
    }
}
```