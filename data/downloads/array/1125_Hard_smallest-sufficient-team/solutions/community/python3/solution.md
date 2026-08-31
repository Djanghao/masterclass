# Python - Optimized backtracking with explanation and code comments [88 ms]

**Author:** Hai_dee
**Votes:** 58
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/334630/](https://leetcode.com/problems/smallest-sufficient-team/solutions/334630/)

---

The first important observation to make is that this problem has that NP-Complete feeling around it. With that, we know that we're probably looking at a pseudo-polynomial algorithm at best (e.g. dynamic programming), or a well optimised non-polynomial algorithm. Given how small the number of skills is, and the number of people, the latter should seem more likely. Therefore, we should be focussing on the best way of doing that, rather than trying to find a true polynomial approach.

The approach I took was a backtracking one. Using a map of skills to people with them and a set of currently unmet skills, go through each skill, considering each person that could perform the skill. Remove all skills that person can perform from the unmet skills set, recursively call on the next skill, and then afterwards return the person's skills to the unmet set (backtracking).

In order to speed it up a bit, I made one other improvement. Before doing the backtracking, the algorithm clears the skill sets of all people who are a subset of another. The sets are replaced with an empty set so that indexes aren't messed up (which would lead to a lot of bother and hassle having to maintain a map, for no efficiency improvement)

Looking at Wikipedia afterwards, this is indeed the [Set Cover Problem](https://en.wikipedia.org/wiki/Set_cover_problem), an NP Complete problem.

In terms of run time, this algorithm completed in 88 ms, which is probably comparable to the DP approaches. The optimizations at the start make a big difference! (Without them, it's TLE)

Comments are in the code. Reading through that is probably the easiest way to understand. Enjoy!

```
class Solution:
    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:
        
        # Firstly, convert all the sublists in people into sets for easier processing.
        for i, skills in enumerate(people):
            people[i] = set(skills)
        
        # Remove all skill sets that are subset of another skillset, by replacing the subset with an
        # empty set. We do this rather than completely removing, so that indexes aren't 
        # disrupted (which is a pain to have to sort out later).
        for i, i_skills in enumerate(people):
            for j, j_skills in enumerate(people):
                if i != j and i_skills.issubset(j_skills):
                    people[i] = set()
        
        # Now build up a dictionary of skills to the people who can perform them. The backtracking algorithm
        # will use this.
        skills_to_people = collections.defaultdict(set)
        for i, skills in enumerate(people):
            for skill in skills:
                skills_to_people[skill].add(i)
            people[i] = set(skills)
        
        # Keep track of some data used by the backtracking algorithm.
        self.unmet_skills = set(req_skills) # Backtracking will remove and readd skills here as needed.
        self.smallest_length = math.inf # Smallest team length so far.
        self.current_team = [] # Current team members.
        self.best_team = [] # Best team we've found, i,e, shortest team that covers skills/
        
		# Here is the backtracking algorithm.
        def meet_skill(skill=0):
			# Base case: All skills are met.
            if not self.unmet_skills:
				# If the current team is smaller than the previous we found, update it.
                if self.smallest_length > len(self.current_team):
                    self.smallest_length = len(self.current_team)
                    self.best_team = self.current_team[::] # In Python, this makes a copy of a list.
                return # So that we don't carry out the rest of the algorithm.
                        
            # If this skill is already met, move onto the next one.
            if req_skills[skill] not in self.unmet_skills:
                return meet_skill(skill + 1)
				# Note return is just to stop rest of code here running. Return values
				# are not caught and used.
            
            # Otherwise, consider all who could meet the current skill.
            for i in skills_to_people[req_skills[skill]]:
                
				# Add this person onto the team by updating the backtrading data.
                skills_added_by_person = people[i].intersection(self.unmet_skills)
                self.unmet_skills = self.unmet_skills - skills_added_by_person
                self.current_team.append(i)
                
				# Do the recursive call to further build the team.
                meet_skill(skill + 1)
                
                # Backtrack by removing the person from the team again.
                self.current_team.pop()
                self.unmet_skills = self.unmet_skills.union(skills_added_by_person)
        
		# Kick off the algorithm.
        meet_skill()        
        return self.best_team 
```