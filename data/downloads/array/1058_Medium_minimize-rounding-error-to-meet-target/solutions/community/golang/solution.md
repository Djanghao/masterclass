# beats 100% explanation given

**Author:** abhinvsinh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/4952668/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/4952668/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Ceil(x)-Floor(x)=1
Find total of Floor of all numbers =min
Find total of Ceil of all numbers =max
List the differences of x-Floor(x)
sort it in ascending order. 

If total mins<target that means we need a few Ceil values to meet target
add 1 to min, to include Ceil
Since we are taking a ceil instead of a floor, get difference to Ceil, but which one? 
our goal is to get minimum error, so we want the minimum difference to ceil, so utilize maximum difference to floor. 
diffToCeil = 1- diffToFloor
min(diffToCeil) = 1- max(diffToFloor)

Once target is reached, we just add the differences we found with floors. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimizeError(prices []string, target int) string {
    min:=0.0
    max:=0.0
    list :=[]float64{}
    for _,num:=range prices{
        d,_:= strconv.ParseFloat(num,64)
        min+= math.Floor(d)
        max+= math.Ceil(d)
        diff := d-math.Floor(d) //diff that was rounded down 
        list =append(list, diff) //list of round downs differences
    }
    
    if max<float64(target) || float64(target) <min { //not within the range
        return "-1"
    }
    sort.Float64s(list)
    low:=0
    high:= len(list)-1

    error :=0.0
    for min < float64(target){
        min++                  //by adding 1, we are choosing 1 ceil instead of 1floor.
        error+= 1-list[high]    //since we are choosing 1 ceil, get diff to ceil, of that choose minimum. 
        high--                 
    }
    for low<=high{             // we choose floors for all others , add up the diffs
        error+= list[low]
        low++
    }


    res := fmt.Sprintf("%.3f", error)
    return res
}
```