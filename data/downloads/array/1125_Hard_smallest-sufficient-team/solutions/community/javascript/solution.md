# Bottom-up + Bitmask | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 13
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3771103/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3771103/)

---

Hello **Tenno Leetcoders**, 

For this problem, we have you have a list of required skills `req_skills`, and a list of people. The `ith` person `people[i]` contains a list of skills that the person has.

Each person in the `people` list has a set of skills represented as a list. Our objective is to form a team that covers all required skills such that for every required skill in `req_skills`, there will be at least one person on the team who has that skil.

Thus, we need to find a `sufficient team of the smallest possible size`

## Explanation

Since we want to find the smallest sufficient team that covers all the required skills, we can use `bottom-up DP / bitmask` to help us explore all possible combinations of teams and their skills efficiently. As a result, we can find the smallest sufficient team without having to consider all possible subsets of people directly. 


### DP (Bottom-up)
Using `DP`, we will use a single array to keep track of the best team we can form for each possbile set of covered skills.

As we iterate `people`, we will be considering whether we should include a person in the team which will lead to a better solution than what we have encountered thus far. If so, we update `dp` only when we find a better team that covers more skills with the smallest possible size


### Bitmask
The main part of this solution is to use bitmask to represent each persons skills, where each bit will correspond to whether the person has the corresponding skill or not. To do that, we will be using bitwise shifting / OR operator to manipulate set of skills efficiently as possible.

As we iterate through the people and their skills, we will use bitwise OR operation to combine the person's skills with the existing set of covered skills for each team. This allows us to check if the newly formed team covers more skills or not


1) Initialize:
    
    - A dictionary denoted as `bit skills` to map each required skills to its corresponding bitmask using bitwise shifting, allowing us to efficiently represent the skills possessed by each person and perform bitwise operations on them.
    
    - To calculate all the required skills combined, we will use bitwise shifting operations. For example, if `required_skills` has `X` amount of skills, then `target_skills = (1 << X) - 1`. This will help create bitmask with all `1` at positions `0` to `X - 1`
    
    - Use a single dp array to track the best team for each set of covered skills. The dp array has a size of `target_skills + 1` to accommodate all possible sets of covered skills from 0 to target_skills. We initialize the dp array with null for each element. The null value indicates that a specific set of covered skills has not been reached yet and, thus, doesn't have a team.
    
2) We iterate over people, and for each person in `people`, we calculate the `bitmask` of each person denoted as `person_bitmask` 

    - iterate through the dp array and check each element represented by covered_skills and only process elements that are not null, as they represent sets of covered skills that have been reached so far.
    
    - For each valid covered_skills, we calculate a new bitmask new_skills by performing a bitwise `OR` operation with the person_bitmask. This gives us a bitmask representing the set of skills that would be covered if we add the current person to the team with covered_skills.
    
    - If new_skills is different from covered_skills, it means the new team has additional covered skills compared to the current covered_skills. 
    
    - We then check if the `dp[new_skills]` element is null or if the new team size `length of dp[covered_skills] + 1` is smaller than the previously recorded team size for the same new_skills. 
        
        - If any of these conditions are met, it indicates a better team, and we update the dp array with the new team.

3) Once we return `dp[target_skills]`, this will guarantee there will be a sufficient small team covering all the required skills


# Code

**Python**

```
class Solution:
    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:

        bit_skills = {}
        for i, skill in enumerate(req_skills): bit_skills[skill] = 1 << i
  
        target_skills = (1 << len(req_skills)) - 1
        dp = [None] * (target_skills + 1)
        dp[0] = []

        for i, person_skills in enumerate(people):
            person_bitmask = sum(bit_skills[skill] for skill in person_skills)
            for covered_skills, team in enumerate(dp):
                if team is None: continue
                new_skills = covered_skills | person_bitmask
                if new_skills == covered_skills: continue
                if dp[new_skills] is None or len(dp[new_skills]) > len(team) + 1 : dp[new_skills] = team + [i]

        return dp[target_skills]
```

**JavaScript**
```
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skill_to_bit = req_skills.reduce((acc, skill, i) => {
        acc[skill] = 1 << i;
        return acc;
    }, {});

    const target_skills = (1 << req_skills.length) - 1;
    const dp = new Array(target_skills + 1).fill(null);
    dp[0] = [];

    for (let i = 0; i < people.length; i++) {
        const person_skills = people[i];
        const person_bitmask = person_skills.reduce((acc, skill) => {
            return acc | skill_to_bit[skill];
        }, 0);

        for (let covered_skills = 0; covered_skills <= target_skills; covered_skills++) {
            if (dp[covered_skills] === null) continue;

            const new_skills = covered_skills | person_bitmask;
            if (dp[new_skills] === null || dp[new_skills].length > dp[covered_skills].length + 1) {
                dp[new_skills] = [...dp[covered_skills], i];
            }
        }
    }

    return dp[target_skills];
};

```

### Time Complexity: O(n*m*2^m)
### Space Complexity: O(2^m)
 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***
![image](./images/0.gif)
