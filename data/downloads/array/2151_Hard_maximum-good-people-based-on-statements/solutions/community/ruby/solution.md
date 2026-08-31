# Explained Ruby 100% performant brute force & backtracked solution O(2^n*n^2)

**Author:** fhndiritu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/4339016/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/4339016/)

---

# Intuition & Approach
### Tip: Since the size of n(15) is small, consider brute force solutions
 
1. Generate all possible combinations that the persons can have i.e good, bad, etc (user Ruby's inbuilt repeated_permutation method)

2. Assuming that each combination above is true, loop through the statements. We can use the current combination to ensure we are only listening to truthful people, they are the only source of real info. 

3. If the truthful person says: 
a. That a person we know to be good in our current combination is a bad person. 
b. Or a person we know to be bad in our current combination is a good person. 
##### That combination is invalid and we must throw it out. 

4. Loop through all 2^n combinations and save those that are valid. 

Return the valid combination that has the max sum 
<!-- Describe your first thoughts on how to solve this problem. -->


# Complexity - O(2^n*n^2)
- Time complexity: 
Looping through all combinations takes O(2^n)
For each combination we loop through all the statements O(n)
For each statement we have to loop it to find the comment O(n) 
Hence O(2^n*n*n) Tc = O(2^n*n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We use extra space to the possible outcomes
where arr_size = n, possible_outcomes = 2^n 
valid outcomes can be at most be 2^n 
2^n + 2^n 

# Code
```
def maximum_good(statements)  
    n = statements.size
    possible_outcomes = [0, 1].repeated_permutation(n).to_a

    valid = []
    
    possible_outcomes.each do |truth|
       valid << truth if  validate_claim(statements, truth) 
    end

    valid.map{|val| val.sum }.max


end

def validate_claim(statements, truthful)
        #invalid if GP says GP is BP
        #invalid if GP says BP is GP
        #we can only trust people in current outcome
        statements.each_with_index do |comments, stated_by|
            next unless truthful[stated_by] == 1
            #trust only good people
                comments.each_with_index do |comment, stated_for|
                    next if comment == 2
                    
                    gp_is_bp = comment == 0 && truthful[stated_for] == 1
                    bp_is_gp = comment ==1 && truthful[stated_for] == 0

                    if gp_is_bp || bp_is_gp
                        return false
                    end
                end
        end

        return true 

end
```