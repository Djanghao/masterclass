# Brute force and binary search optimization

**Author:** ChengSeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/2855151/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/2855151/)

---

Count every arr1 element where the ***difference between arr1 element and every arr2 element is bigger than d***.
```ruby
def find_the_distance_value(arr1, arr2, d)
  arr1.count { |num| arr2.none? { |n| n.between?(num - d, num + d) } }
end
```

```ruby
def find_the_distance_value(arr1, arr2, d)
  arr1.count { |num| arr2.all? { |num2| num2 < num - d || num2 > num + d } }
end
```
Binary search optimization
```ruby
def find_the_distance_value(arr1, arr2, d)
  arr2.sort!
  arr1.count { |num| valid?(arr2, num - d, num + d) }
end

def valid?(arr, lower_bound, upper_bound)
  left = 0
  right = arr.length - 1
    
  while left <= right
    mid = (left + right)/2
      
    if arr[mid] >= lower_bound && arr[mid] <= upper_bound
      return false
    elsif arr[mid] >= lower_bound
      right = mid - 1
    else
      left = mid + 1
    end
  end
    
  true
end
```