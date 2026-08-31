# Python 3 - Straightforward approach Faster than 98.38% users

**Author:** AB07
**Votes:** 36
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1036788/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1036788/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Website pattern can be represented as a graph
- Score the pattern based on visit count
- Find the score of highest visited pattern

# Approach
<!-- Describe your approach to solving the problem. -->
- Create a graph of user routes
- Find the combinations of all web routes. Use a set to avoid duplicates and sort lexicographically.
- Find the frequencies of the patterns visited
- Return the most frequent item

# Complexity

**Time Complexity:**
- The `get_combinations` method in the `Utilities` class generates all combinations of size `combination_size` from `items_list`. This operation has a time complexity of $$O(n^k)$$, where `n` is the length of `items_list` and `k` is `combination_size`. In this case, `k` is 3.
- The `mostVisitedPattern` method in the `Solution` class iterates over all users and their respective website visit lists. For each user, it generates all combinations of 3 websites from the user's website visit list. This operation has a time complexity of $$O(m \\cdot n^3)$$, where `m` is the number of users and `n` is the average number of websites visited by a user.
- The `Counter` operation has a time complexity of $$O(p)$$, where `p` is the total number of combinations.
- The `sort` operation has a time complexity of $$O(p \\cdot log(p))$$.
- Therefore, the overall time complexity is $$O(m \\cdot n^3 + p \\cdot log(p))$$.

**Space complexity:**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The `user_routes` dictionary stores all website visits for each user. This requires $$O(m \\cdot n)$$ space, where m is the number of users and n is the average number of websites visited
- The `combinations` list stores all combinations of 3 websites from all users. This requires $$O(p)$$ space, where p is the total number of combinations.
- Therefore, the overall space complexity is $$O(m \\cdot n + p)$$.

# Solution #1
```
class Utilities:
    def get_combinations(self, items_list, combination_size):
        combinations = []

        def recurse(start_index, current_combination):
            # If we have the required size of combination, add it to result
            if len(current_combination) == combination_size:
                # Add combinations as a tuple to make them hashable
                combinations.append(tuple(current_combination))
                return

            for index in range(start_index, len(items_list)):
                recurse(index + 1, current_combination + [items_list[index]])

        # Start at the 0 index in the website pattern
        recurse(0, [])
        return combinations

class Solution:
    def mostVisitedPattern(self, username: List[str], timestamp: List[int], website: List[str]) -> List[str]:
        # create a user graph of user routes which define the routes by user
        user_routes = defaultdict(list)
        for _, user, website in sorted(zip(timestamp, username, website)):
            user_routes[user].append(website)
        # print(user_routes)

        # Get Combinations of all web routes
        combinations = []
        for _, web_routes in user_routes.items():
            # print(web_routes)
            route_combination = Utilities().get_combinations(web_routes, 3)
            # print("ROUTE_COMBINATION: ", route_combination)
            combinations += set(route_combination)
        # print(Counter(combinations))

        # We need to get the lexicographically sorted combinations
        combinations.sort()
        # Find the frequency of a pattern visited sorted by most frequenct descending
        pattern_frequency = Counter(combinations).most_common()
        return pattern_frequency[0][0]

```
# Solution #2

```
class Solution:
    def mostVisitedPattern(self, username: List[str], timestamp: List[int], website: List[str]) -> List[str]:
        # SORT THE WEBSITE INFO BASED ON THE TIMESTAMPS
        webInfo = []
        for time, usr, web in zip(timestamp, username, website):
            webInfo.append((time, usr, web))
            
        webInfo.sort(key=lambda x:x[0])
        # print(webInfo)
        
        # FIND THE WEBSITES VISITED BY PARTICULAR USERS
        websiteVisit = defaultdict(list)
        for _, usr, web in webInfo:
            websiteVisit[usr].append(web)
            
        # print(websiteVisit)
        # FIND THE ROUTES IN THE FORM OF TUPLES OF LENGTH 3
        possibleTuples = defaultdict(int)
        for usr in websiteVisit:
            webRoutes = set(combinations(websiteVisit[usr], 3))
            for webRoute in webRoutes:
                possibleTuples[webRoute] += 1
                
        # print(possibleTuples)
        # FIND MAX VALUE OF USERS VISITED
        maxVal, routes = max(possibleTuples.values()), []
        for r, val in possibleTuples.items():
            if val == maxVal:
                routes.append(r)
                
        if len(routes) > 1:
            # SORTS LEXICOGRAPHICALLY
            routes.sort()
        
        return routes[0]
```