# Prefix Sum + Hashmap(cache)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/4193728/](https://leetcode.com/problems/longest-well-performing-interval/solutions/4193728/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} hours
# @return {Integer}
def longest_wpi(hours)
    past_prefix = {}
    i = 0
    total = 0
    max = 0
    while i < hours.size
        # Increase or decrease total based on whethere or not current element is larger than 8.
        if hours[i] > 8
            total+= 1
        else
            total-= 1
        end

        # There are two finds to get potential answers.
        # 1. if total is positive, total will always beat out the second option.
        # 2. Check if the total - 1 has shown up in the past, this will
        # give us an interval which is a minimum of 1.
        potential_answer = 0
        if total > 0
            potential_answer = i + 1
        else
            if past_prefix[total - 1] and (potential_answer <  i - past_prefix[total - 1])
                potential_answer = i - past_prefix[total - 1]
            end
        end

        # If total has not shown up in the past, add it to our cache as the key and value being the current index.
        if !past_prefix[total]
            past_prefix[total] = i
        end

        # If our potential_answer is larger than max, update max to be potential_answer.
        if potential_answer > max
            max = potential_answer
        end

        i += 1
    end

    max
end

def longest_wpi_tle(hours)
    
    i = 0
    total = 0
    highest_above_water = nil
    while i < hours.size

        if hours[i] > 8
            total+= 1
            hours[i] = total
        else
            total-= 1
            hours[i] = total
        end

        if total > 0
            highest_above_water = i
        end

        i += 1
    end

    max = 0
    current_starting_index = 0
    i = 0
    final_index = hours.size - 1
    while i < final_index

        j = final_index

        while j >= i 
            if hours[j] > 0
                total = j - i + 1
                if total > max
                    max = total
                end
                break
            
            elsif hours[j] > hours[i] 
                total = j - i 
                if total > max
                    max = total
                end
                break
            end

            j -= 1
        end

        i += 1
    end
    
    max
end
```