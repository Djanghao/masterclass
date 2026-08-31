# [ php / C++ ] Editorial O(logn)

**Author:** shen_7
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4269757/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4269757/)

---



```php []
  class Solution {

    /**
     * @param Integer[] $grades
     * @return Integer
     */
    function maximumGroups($grades) {
        $n=count($grades);
        $high=count($grades);
        $low=1;
        $ans=$n;
        while($low<=$high){
            $mid=$low+intdiv(($high-$low),2);
            $val=intdiv(($mid*($mid+1)),2);
            if($val<=$n){
                $ans=$mid;
                $low=$mid+1;
            }else{
                $high=$mid-1;
            }
        }

        return $ans;
    }
}
```
```C++ []
  class Solution {
public:
    int maximumGroups(vector<int>& grades) {
        int n=grades.size();
        int low=1;
        int high=n;
        int ans=1;
        while(low<=high){
            int mid=low+(high-low)/2;
            long long k=((mid)*1ll*(mid+1))/2;
            if(k<=n){
                ans=mid;
                low=mid+1;
            }else{
                high=mid-1;
            }
        }

        return ans;
    }
};
```
