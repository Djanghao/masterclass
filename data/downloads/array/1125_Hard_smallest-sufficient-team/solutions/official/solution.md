# Official Solution

**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solution/](https://leetcode.com/problems/smallest-sufficient-team/solution/)

---

[TOC]

## Solution

--- 

### Overview

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

One of the first things you should notice in the statement are the constraints – they may hint at the time complexity of the intended algorithm.

---

### Approach 1: Bottom-Up Dynamic Programming with Bitmasks

#### Intuition

Let $n$ be the number of people and $m$ be the number of required skills.

In this problem, $m$ is very small – up to $16$. It alludes to track which skills have been covered so far, which is possible to do efficiently with a bitmask.

First, let's make our lives easier by dealing with indices instead of strings for the required skills. We use a hash map `skillId` that keeps the index for each skill. We initialize $\text{skillId}[\text{req\_skills}[i]] = i$ for all $i$ from $0$ to $m - 1$.

Now, when each skill has its number, we can represent every set of skills with a bitmask – an integer between $0$ and $2^m - 1$.

How do we associate a set and an integer exactly? We look at the binary representation of the integer. If the $i^\text{th}$ bit is $1$, element $i$ belongs to the set. Otherwise, it does not.

>**Examples**
>* $101111_2=2^0+2^1+2^2+2^3+2^5=47$ represents the set $\{0, 1, 2, 3, 5\}$.
>* $1001010_2=2^1+2^3+2^6=74$ represents the set $\{1, 3, 6\}$.
>* $0$ represents an empty set.
>* $2^0+2^1+2^2+\dots+2^{m-1}=2^m-1$ represents $\{0, 1, 2, \dots, m - 1\}$.

The problem asks to find the smallest team such that the union of the skill sets of its members is the set of all required skills $\{0, 1, 2, \dots, m - 1\}$.

One can reformulate the statement in terms of bitmasks: we need to find the smallest team such that the bitwise OR of the bitmasks representing the skill sets of its members is $2^m - 1$ (which is the representation of $\{0, 1, 2, \dots, m - 1\}$).

We will solve this problem using dynamic programming.


Let $\text{dp}[\text{skillsMask}]$ be a bitmask representing the smallest team that possesses all the skills from $\text{skillsMask}$. The value of $\text{dp}[\text{skillsMask}]$ is a bitmask that represents the set of team members. If there are multiple smallest teams, $\text{dp}[\text{skillsMask}]$ may represent any of them.

We are using bitmasks to represent `skillsMask`, but we can also use bitmasks to represent a set of people. $\text{skillsMask}$ represents the set of skills, and $\text{dp}[\text{skillsMask}]$ represents the set of people on the team. Similar to how we treat the `skillsMask` bitmask, the bitmask representing people has the $i^\text{th}$ bit set if the $i^\text{th}$ person is on the team.

> See an example with five people having the following skills masks.
>* Person $0$: $0110$.
>* Person $1$: $1010$.
>* Person $2$: $0001$.
>* Person $3$: $0101$.
>* Person $4$: $0100$.
>
> Consider values of $\text{dp}$ for several different $\text{skillsMask}$.
>* To obtain $\text{skillsMask} = 0110$, it is sufficient to take only the person $0$ to a team. The mask representing the team containing only the person $0$ is $00001_2 = 2^0 = 1$. Thus $\text{dp}[0110] = 00001$.
>* Similarly, $\text{dp}[0101] = 01000_2 = 2^3 = 8$ – the person $3$ can cover the skills mask $0101$ by themselves.
>* To cover $1110$, one person is insufficient, and we need two people with indices $0$ and $1$: $\text{dp}[1110] = 00011_2 = 2^0 + 2^1 = 3$.
>* Two people $1$ and $3$ can cover $1111$ together which implies $\text{dp}[1111] = 01010_2 = 2^1 + 2^3 = 10$.


The base case of this dynamic programming (DP) problem is when $\text{skillsMask} = 0$, which represents an empty set of skills. When no skills are required, we can form an empty team, and thus, we set $\text{dp}[0] = 0$ – a bitmask representing an empty set of people.

Now we need to write down the transitions of this DP.

For a given $\text{skillsMask} \ne 0$, there must be at least one person in a team. Since we need to find the minimal team, we initialize $\text{dp}[\text{skillsMask}]$ with a large value, like the team of all people $2^n - 1$.

Then we iterate over all people and for each person, try to update $\text{dp}[\text{skillsMask}]$ with a team containing this person.

The $i^\text{th}$ person or at least one other team member must possess the skills in $\text{skillsMask}$.

Let $\text{skillsMaskOfPerson}[i]$ denote the bitmask representing the skills set of the $i^\text{th}$ person. We can precompute this to make the algorithm more efficient.

> To summarize, we have 3 types of bitmasks. First, the keys to `dp`, which is `skillsMask`. This represents the set of skills that a team covers. Next, the `dp` values represent a set of people on a team. Finally, we are using `skillsMaskOfPerson` to represent the skills that a given person possesses, which is given in the input – we just need to convert it using `skillId`, which we defined at the start.

Although the other team members may possess the skills from $\text{skillsMaskOfPerson}[i]$, it is not necessary. However, they must have the skills from $\text{skillsMask}$ that are not present in $\text{skillsMaskOfPerson}[i]$.

The set $\text{smallerSkillsMask} = \text{skillsMask} \setminus \text{skillsMaskOfPerson}[i]$, where $\setminus$ denotes the set difference, contains the required skills that the $i^\text{th}$ person does not possess. The other team members must possess these skills.

In a code, a neat trick to calculate $\text{smallerSkillsMask}$ is `skills_mask & ~skills_mask_of_person[i]`. Alternatively, one could calculate it manually by checking each bit one by one, but this trick is cleaner.

We will update $\text{dp}[\text{skillsMask}]$ with the bitmask $\text{dp}[\text{smallerSkillsMask}] \text{ OR } 2^i$ – add the $i^\text{th}$ person to the team and cover the remaining skills with the smallest possible set of people, which is defined as  $\text{dp}[\text{smallerSkillsMask}]$. This update only makes sense if $\text{smallerSkillsMask} \ne \text{skillsMask}$ because otherwise, the $i^\text{th}$ person would not contribute any new skills to the team.

The answer to the problem is $\text{dp}[2^m - 1]$ – the smallest team that possesses all the required skills.

#### Algorithm

1. Set $n$ to the number of people.
2. Set $m$ to the number of required skills.
3. Declare the hash map $\text{skillId}$.
4. Iterate $i$ from $0$ to $m - 1$.
	* Set $\text{skillId}[\text{req\_skills}[i]] = i$.
5. Declare and initialize the array $\text{skillsMaskOfPerson}$.
6. Iterate $i$ from $0$ to $n - 1$.
	* Iterate $\text{skill}$ over $\text{people}[i]$.
		* Set the bit $\text{skillId}[\text{skill}]$ in the bitmask $\text{skillsMaskOfPerson}[i]$.
7. Declare the array $\text{dp}$ of size $2^m$ and initialize it with the values of $2^n - 1$.
8. Set $\text{dp}[0] = 0$. (The base case of the DP.)
9. Iterate $\text{skillsMask}$ from $1$ to $2^m - 1$.
	* Iterate $i$ from $0$ to $n - 1$.
		* Set $\text{smallerSkillsMask} = \text{skillsMask} \setminus \text{skillsMaskOfPerson}[i]$.
		* If $\text{smallerSkillsMask} \ne \text{skillsMask}$.
			* Set $\text{peopleMask}$ to $\text{dp}[\text{smallerSkillsMask}] \text{ OR } 2^i$. This is the mask that represents the new team once you add the current person.
			* Update $\text{dp}[\text{skillsMask}]$ with $\text{peopleMask}$, if it is better (has fewer bits set).
10. Return the array containing the elements from the bitmask $\text{dp}[2^m - 1]$.

#### Implementation

> Note that in Java and C++ we need to use long for the masks representing teams because according to the constraints, there could be at most 60 people, and $2^{60}$ is too large for int.

<iframe src="https://leetcode.com/playground/HeDnwKSJ/shared" frameBorder="0" width="100%" height="500" name="HeDnwKSJ"></iframe>


#### Complexity Analysis

* Time complexity: $O(2^m \cdot n)$.

There are two nested for loops: `for skillsMask`, which performs $O(2^m)$ iterations, and `for i`, which performs $O(n)$ iterations. We process each transition inside these loops in $O(1)$.

* Space complexity: $O(2^m)$.

We store a DP array of size $2^m$.

---

### Approach 2: Top-Down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will calculate the same DP as in the previous one, but the manner of organizing computations will differ.

We will use the recursive function $f(\text{skillsMask})$ that returns the value of $\text{dp}[\text{skillsMask}]$.

One can rewrite the DP recurrence relation in terms of $f$ as follows. For all $i$ from $0$ to $n - 1$, update $\text{dp}[\text{skillsMask}]$ with the bitmask $f(\text{smallerSkillsMask}) \text{ OR } 2^i$.

When we call $f(\text{skillsMask})$ for the first time, we calculate the result for $\text{skillsMask}$ and write it into $\text{dp}[\text{skillsMask}]$. When we call $f(\text{skillsMask})$ after that, we immediately return $\text{dp}[\text{skillsMask}]$ computed earlier.

The answer to the problem is the team $f(2^m - 1) = \text{dp}[2^m - 1]$.

There remains one small technical question: how to know whether we call $f(\text{skillsMask})$ for the first time and need to compute the result, or we call it later and can return $\text{dp}[\text{skillsMask}]$ found earlier? One can handle this by initializing the $\text{dp}$ array with the value of $-1$. Then $\text{dp}[\text{skillsMask}] = -1$ will mean that we have not calculated $f(\text{skillsMask})$ yet. As soon as we find the result of $f(\text{skillsMask})$, we will write it into $\text{dp}[\text{skillsMask}]$, and this value will not be $-1$ anymore.

#### Algorithm

The function $f$ takes a parameter $\text{skillsMask}$.
1. If $\text{dp}[\text{skillsMask}] \ne -1$, return $\text{dp}[\text{skillsMask}]$ (the value computed earlier).
2. Iterate $i$ from $0$ to $n - 1$. Try to update $\text{dp}[\text{skillsMask}]$ with a team containing the $i^\text{th}$ person.
	* Set $\text{smallerSkillsMask} = \text{skillsMask} \setminus \text{skillsMaskOfPerson}[i]$.
	* If $\text{smallerSkillsMask} \ne \text{skillsMask}$.
		* Set $\text{peopleMask} = f(\text{smallerSkillsMask})$.
		* If $\text{dp}[\text{skillsMask}] = -1$ (we have not found any team for $\text{skillsMask}$ yet) or $\text{peopleMask} \text{ OR } 2^i$ is smaller than the current team $\text{dp}[\text{skillsMask}]$, update $\text{dp}[\text{skillsMask}]$ with $\text{peopleMask} \text{ OR } 2^i$.
3. Return $\text{dp}[\text{skillsMask}]$.

Before calling $f$ we need to precalculate $\text{skillsMaskOfPerson}[i]$ for all $i$. Also, we initialize $\text{dp}[0] = 0$ as the base case and all other elements to `-1`.

The answer to the problem is $f(2^m - 1)$.

#### Implementation

<iframe src="https://leetcode.com/playground/ErDF2hwQ/shared" frameBorder="0" width="100%" height="500" name="ErDF2hwQ"></iframe>


#### Complexity Analysis

* Time complexity: $O(2^m \cdot n)$.

Even though we changed the order of calculating DP, the time complexity is the same as in the previous approach: for each $\text{skillsMask}$, we compute $\text{dp}[\text{skillsMask}]$ in $O(n)$. Since we store the results in memory, we will calculate each $\text{dp}[\text{skillsMask}]$ only once.

* Space complexity: $O(2^m)$.

We store a DP array of size $2^m$.