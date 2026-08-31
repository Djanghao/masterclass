# Ruby solution, brute force & optimized

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/2922564/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/2922564/)

---

### Brute Force: TLE
Worst case time is **O(m*n)** where:
	m = upper - lower
	n = differences.size
```
def number_of_arrays(differences, lower, upper)
    count = 0
    (lower..upper).each do |starter|
        temp = starter + differences[0]
        i = 1
        while i < differences.size && boundary_check(temp, lower, upper)
            temp = temp + differences[i]
            i += 1
        end
        count += 1 if i == differences.size && boundary_check(temp, lower, upper)
    end
	
    return count
end

def boundary_check(val, lower, upper)
    return val >= lower && val <= upper ? true : false
end
```


### O(n) optimized:
```
def number_of_arrays(differences, lower, upper)
    temp = [0]
    differences.each_with_index { |diff, idx| temp << temp[idx] + diff }
	
    acceptable_window_size = upper - lower
    amt_of_deviation = temp.max - temp.min
    num_hidden_sequences = acceptable_window_size - amt_of_deviation + 1
    
    #  negative num_hidden_sequences means none fit the criteria
    return [0, num_hidden_sequences].max
end
```

Brute force approach is pretty straightforward. I was pretty disappointed to get TLE as this is how I would write the code in a production environment. 
* We iterate for every value between the lower and upper boundaries. 
	* Using each of these as a starting point, we calculate the next hidden value and save it as the variable ```temp```. 
	* If ```boundary_check``` returns false on ```temp``` we go to the next ```starter``` 
	* If we reach the end of ```differences``` , we increment ```count```

The trick with the optimized solution is to have each index of ```temp``` represent the distance that you're deviating from the starting value. 
* ```temp.max```  is the most you deviate in the positive direction
* ```temp.min``` is the most you deviate in the negative direction
* ```temp.max - temp.min``` is the size of our deviation window

