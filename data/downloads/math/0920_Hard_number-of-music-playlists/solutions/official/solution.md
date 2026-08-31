# Official Solution

**Link:** [https://leetcode.com/problems/number-of-music-playlists/solution/](https://leetcode.com/problems/number-of-music-playlists/solution/)

---

[TOC]

## Solution

---

### Approach 1: Bottom-up Dynamic Programming

>**Note.** For this approach, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this approach.

#### Intuition

We can't simply generate all possible playlists because the problem constraints are too large. Therefore, we need to approach this problem in a different, more efficient way. That's where dynamic programming comes in.

We're using a dynamic programming (DP) table $\text{dp}[i][j]$ to represent the number of possible playlists of length $i$ containing exactly $j$ unique songs. Our goal is to calculate $\text{dp}[\text{goal}][n]$, which represents the number of ways we can make a playlist of length $\text{goal}$ using exactly $n$ unique songs.

##### Base cases

To generate the DP table, we need to define the initial conditions:
* $\text{dp}[0][0] = 1$. This represents that there's exactly one way to create a playlist of length $0$ with $0$ unique songs, which is essentially an empty playlist.
* For all $i < j$, $\text{dp}[i][j] = 0$. This makes sense because we can't form a playlist of length $i$ with $j$ unique songs when $i < j$. There just aren't enough slots in the playlist to accommodate all the unique songs.

##### Transitions

Now, let's look at the transition rules to fill up the rest of the DP table. Let's say we want to compute the value $\text{dp}[i][j]$.

If we add a song that we haven't played yet to the playlist, the playlist length increases by $1$ (from $i - 1$ to $i$), and the number of unique songs also increases by $1$ (from $j - 1$ to $j$). Therefore, a playlist of length $i$ with $j$ unique songs can be formed by adding new songs to each playlist of length $i - 1$ with $j - 1$ unique songs.

In this scenario, how many new songs do we have available to choose from?

At this point, we have $j - 1$ unique songs in the playlist. Since there are $n$ unique songs in total, the number of new songs we can add to the playlist is $n - (j - 1) = n - j + 1$.

Since we have $n - j + 1$ choices of the new song, the number of new playlists we can create by adding a new song is $\text{dp}[i - 1][j - 1] \cdot (n - j + 1)$. Hence, we add this to $\text{dp}[i][j]$.

If we replay an old song, the playlist length increases by $1$ (from $i - 1$ to $i$), but the number of unique songs remains the same (still $j$). Therefore, the number of playlists of length $i$ with $j$ unique songs can be increased by replaying an old song in every playlist of length $i - 1$ with $j$ unique songs.

In this scenario, how many previously played songs can we choose from?

At this point, we have $j$ unique songs in the playlist, so we can choose any of these $j$ songs. However, due to the constraint that we can't replay a song unless $k$ other songs have been played, we can't choose from the last $k$ played songs.

So, if $j > k$, the number of old songs we can replay is $j - k$.

Since we have $j - k$ choices of the old song to replay, the number of new playlists we can create by replaying an old song is $dp[i - 1][j] \cdot (j - k)$. Hence, if $j > k$, we add this to $\text{dp}[i][j]$.

These two scenarios encompass all possible transitions for our dynamic programming solution. Each iteration of our loop considers both of these possibilities and updates $\text{dp}[i][j]$ accordingly. Since this problem involves large numbers, we perform all operations modulo $10^9 + 7$ to avoid overflow issues.

In the end, $\text{dp}[\text{goal}][n]$ will represent the number of possible playlists of length $\text{goal}$ using exactly $n$ unique songs, which is the answer to our problem.

#### Algorithm

1. Initialize a two-dimensional dynamic programming table, $\text{dp}[\text{goal} + 1][n + 1]$, with zeros.
2. Set $\text{dp}[0][0]$ to 1, as there is exactly one way to have a playlist of length $0$ with $0$ unique songs.
3. Iterate $i$ from $1$ to $\text{goal}$. (This represents the current length of the playlist).
	* Within this loop, iterate $j$ from $1$ to $\min(i, n)$. (This represents the number of unique songs in the playlist).
		* Calculate the number of new playlists created by adding a new song: $\text{dp}[i - 1][j - 1] \cdot (n - j + 1)$. Add this value to $\text{dp}[i][j]$ under modulo $10^9 + 7$.
		* If $j > k$, calculate the number of new playlists created by replaying an old song: $\text{dp}[i - 1][j] \cdot (j - k)$. Add this value to $\text{dp}[i][j]$ under modulo $10^9 + 7$.
4. Return the value of $\text{dp}[\text{goal}][n]$.

#### Implementation

<iframe src="https://leetcode.com/playground/6vSUxbaA/shared" frameBorder="0" width="100%" height="446" name="6vSUxbaA"></iframe>

#### Complexity Analysis

* Time Complexity: $O(\text{goal} \cdot n)$.

We need to iterate over a two-dimensional DP table of size $\text{goal} + 1$ by $n + 1$. In each cell, we perform constant time operations.

* Space Complexity: $O(\text{goal} \cdot n)$.

We're maintaining a two-dimensional DP table of size $\text{goal} + 1$ by $n + 1$ to store intermediate results.

---

### Approach 2: Top-down Dynamic Programming (Memoization)

#### Intuition

The bottom-up DP solution iteratively builds up to the solution starting from the simplest subproblems. The top-down dynamic programming approach, also known as memoization, starts with the original problem and breaks it down into subproblems as needed. Here's how we can adjust the solution to a top-down approach.

We declare the same two-dimensional DP table, $\text{dp}[\text{goal} + 1][n + 1]$. This table will keep track of the number of possible playlists of length $i$ using $j$ unique songs. All elements in the DP table are initialized to a sentinel value, for example, $-1$, which indicates that the subproblem hasn't been solved yet.

> The term "sentinel value" is a common term used in computer science to refer to a special value that's used for a specific purpose. In the context of this problem, the sentinel value is a special value that we use to initialize the dynamic programming table, and it indicates that a specific subproblem has not been solved yet.

We then define a function, $\text{numberOfPlaylists}(i, j)$, that computes and returns the number of playlists of length $i$ using $j$ unique songs. Inside this function, we first check if the solution to this subproblem has already been computed by verifying whether $\text{dp}[i][j]$ is not equal to $-1$. If it is not, we return $\text{dp}[i][j]$ because it means we've already solved this subproblem and computed its solution.

If $\text{dp}[i][j]$ is equal to $-1$, then we need to compute the solution.

The base cases of the recursion are as follows:
* If both $i$ and $j$ are equal to $0$, then the number of possible playlists is $1$. This case represents the fact that there's exactly one way to create a playlist of $0$ length with $0$ unique songs: an empty playlist.
* If $i$ or $j$ is $0$ and $i$ is not equal to $j$, then the number of possible playlists is $0$. This case represents the impossibility of having a playlist of length $i$ with $j$ unique songs. We can directly return $0$ in this case.

In the function $\text{numberOfPlaylists}(i, j)$, these base cases are checked before we proceed to the computation part.

Then we calculate the number of possible playlists by considering two cases: adding a new song or replaying an old song. The number of ways to add a new song is $\text{dp}[i - 1][j - 1] \cdot (n - j + 1)$ and to replay an old song is $\text{dp}[i - 1][j] \cdot (j - k)$ if $j > k$.

After computing the solution for the subproblem, we store it in $\text{dp}[i][j]$ and return this value. This ensures that if we encounter the same subproblem later, we can retrieve the solution from the DP table without needing to re-compute it, which gives us the efficiency advantage of dynamic programming.

The final answer to the problem is obtained by calling the function $\text{numberOfPlaylists}(\text{goal}, n)$. This gives us the number of possible playlists of length $\text{goal}$ using exactly $n$ unique songs.

#### Algorithm

1. Initialize a two-dimensional dynamic programming table, $\text{dp}[\text{goal} + 1][n + 1]$, with $-1$. This table will be used to store the number of possible playlists of length $i$ using exactly $j$ unique songs.
2. Implement a recursive function, $\text{numberOfPlaylists}(i, j)$, to calculate the number of playlists of length $i$ with $j$ unique songs.
	* If $i$ is equal to $0$ and $j$ is equal to $0$, return $1$. This represents an empty playlist with no unique songs.
	* If either $i$ or $j$ is equal to $0$, return $0$. This represents an impossible scenario where the length of the playlist or the number of unique songs is zero.
	* If $\text{dp}[i][j]$ is not equal to $-1$, return $\text{dp}[i][j]$. This indicates that the solution for this subproblem has already been computed and can be directly retrieved from the dynamic programming table.
	* Calculate the number of new playlists created by adding a new song to the playlist. This can be done by recursively calling $\text{numberOfPlaylists}(i - 1, j - 1)$ and multiplying it by $(n - j + 1)$, which represents the number of new songs available to choose from. Assign $\text{dp}[i][j]$ to this value.
	* Calculate the number of new playlists created by replaying an old song. This can be done by recursively calling $\text{numberOfPlaylists}(i - 1, j)$ and multiplying it by $(j - k)$ if $j > k$. This accounts for the restriction that a song can only be replayed if $k$ other songs have been played before it. If $j > k$, add this value to $\text{dp}[i][j]$.
	* Return $\text{dp}[i][j]$.
3. Finally, call the $\text{numberOfPlaylists}(\text{goal}, n)$ function to obtain the total number of possible playlists of length $\text{goal}$ using exactly $n$ unique songs. This will be the final answer to the problem.

#### Implementation

<iframe src="https://leetcode.com/playground/5nzAjpWw/shared" frameBorder="0" width="100%" height="500" name="5nzAjpWw"></iframe>

#### Complexity Analysis

* Time Complexity: $O(\text{goal} \cdot n)$.

We are filling up a 2D DP table with $\text{goal}+1$ rows and $n+1$ columns. Each cell of the DP table gets filled once.

* Space Complexity: $O(\text{goal} \cdot n)$.

The 2D DP table uses $O(\text{goal} \cdot n)$ of memory.

---

### Approach 3: Combinatorics

#### Intuition

> Note: this approach is very mathematical and out of scope for an interview. Do not be discouraged if you cannot come up with this solution. We have included it for the sake of completeness.

Imagine you have a set of $i$ unique songs, and $i$ could be any number from $k$ to $n$ (inclusive).

Now, define $f(i)$ as the total number of different playlists of length $\text{goal}$ you can create using only songs from this collection (including the playlists that contain fewer than $i$ unique songs). The important thing to remember is that we're following a rule about repeating songs: you can only play the same song again after $k$ other different songs have been played.

How do we count $f(i)$?

* For the very first song in the playlist, you have $i$ choices because you have $i$ unique songs. So, you pick one song out of $i$ possibilities.
* For the second song, since it cannot be the same as the first one, you have $i - 1$ choices. You've already played one song, and you can't repeat it yet, so you have one fewer choice.
* You keep picking new songs for the first $k$ songs in the playlist. For the third song, you have $i - 2$ choices, for the fourth one $i - 3$ choices, and so on, until the $k$-th song, for which you have $i - (k - 1)$ choices.
* Now, for the $(k+1)$-th song and onwards, the only banned songs are $k$ last played songs. Thus, each of the remaining $\text{goal} - k$ songs has $i - k$ possible choices.

This leads us to the formula for $f(i)$: $$f(i) = i \cdot (i - 1) \cdot (i - 2) \cdot \dots \cdot (i - k + 1) \cdot (i - k)^{\text{goal} - k} = \dfrac{i!}{(i - k)!} (i - k)^{\text{goal} - k}.$$

You might think that $f(n)$ is the answer to the problem. However it is not the case, because $f(n)$ counts also the playlists that contain fewer than $n$ unique songs, which are not valid according to the problem statement. We only want the playlists that contain **exactly** $n$ unique songs.

Consider an example with $n = 4$, $k = 2$ and $\text{goal}$ being an arbitrary number such that $\text{goal} \ge n$. We have $4$ songs, let's label them $A$, $B$, $C$ and $D$.
* There is $\binom{4}{4} = 1$ set of songs of size $4$: $\{A, B, C, D\}$. Here $\binom{n}{i} = \frac{n!}{i! (n - i)!}$ denotes the binomial coefficient that represents the number of ways to choose $i$ unique songs from $n$ songs.
* Also, there are $\binom{4}{3} = 4$ sets of songs of size $3$: $\{A, B, C\}$, $\{A, B, D\}$, $\{A, C, D\}$, $\{B, C, D\}$.
* Finally, there are six sets of size $\binom{4}{2} = 6$: $\{A, B\}$, $\{A, C\}$, $\{A, D\}$, $\{B, C\}$, $\{B, D\}$, $\{C, D\}$.
Here we do not consider sets with fewer than $k$ songs.

Since $f(4)$ includes playlists containing $2$, $3$, or $4$ unique songs, we have over-counted some of the playlists and now need to correct this over-counting.

We can use a principle from combinatorics, the inclusion-exclusion principle, to do this correction. The basic idea of this principle is to subtract the over-counted cases from the total to avoid double counting.

Let's see how it applies to our problem.

* The case of $3$ unique songs:

Consider any subset of $3$ unique songs. The total number of playlists that can be made from these $3$ songs is $f(3)$. Now, when we calculated $f(4)$, we included all the possible playlists of $4$ songs, which implicitly also counts the playlists that contain only $3$ of these $4$ songs.

For instance, consider songs $A$, $B$, $C$, and $D$. When we look at $f(4)$, it counts playlists that use songs $A$, $B$, $C$, $D$ but also counts playlists that might use only songs $A$, $B$, $C$ (or any other combination of $3$ songs). These latter playlists are also counted in $f(3)$.

We need to correct this over-counting by subtracting $f(3)$ from $f(4)$. However, since there are $4$ possible combinations of $3$ songs that we could choose from the $4$ songs (i.e., $\binom{4}{3} = 4$), we need to subtract $4 \cdot f(3)$ from $f(4)$.

* The case of $2$ unique songs:

Let's consider the subset $\{A, B\}$ from our total set $\{A, B, C, D\}$. With these $2$ songs, we can generate $f(2)$ different playlists, following the rule about song repetition.

When we computed $f(4)$, it included all possible playlists that could be made from any or all of the $4$ songs ($A$, $B$, $C$, $D$). Hence, the playlists which include only songs $A$ and $B$ were counted in $f(4)$.

Then, we computed $f(3)$ for each combination of $3$ songs. For instance, for the combination $\{A, B, C\}$, it also includes playlists that only use $A$ and $B$, and similarly for $\{A, B, D\}$. In this way, we are counting the "only $2$ songs" playlists in each $f(3)$.

Now, when we corrected $f(4)$ by subtracting $4 \cdot f(3)$, our aim was to remove the over-counting of "only $3$ songs" playlists. However, as a side effect, we also subtracted the "only $2$ songs" playlists twice. For example, we subtracted playlists that includes $A$ and $B$ once for $\{A, B, C\}$ and once for $\{A, B, D\}$. Hence, we've subtracted the "only $2$ songs" playlists two more times than we've added them, leading to under-counting.

So, to correct for this under-counting, we need to add back the number of "only $2$ songs" playlists. There are $\binom{4}{2} = 6$ ways to choose $2$ unique songs from our set of $4$ songs ($A$, $B$, $C$, $D$). So, for each of these $2$ song combinations, we add $f(2)$ to our count. This means we add $6 \cdot f(2)$ to our count to correct for the under-counting of "only $2$ songs" playlists.

The final answer for $n = 4$, $k = 2$ is $\binom{4}{4} f(4) - \binom{4}{3} f(3) + \binom{4}{2} f(2)$.

For $n = 7$, $k = 4$ the answer would be $\binom{7}{7} f(7) - \binom{7}{6} f(6) + \binom{7}{5} f(5) - \binom{7}{4} f(4)$.

In general, for each $i$ from $k$ to $n$, we calculate $(-1)^{n-i} \binom{n}{i} f(i)$. The $(-1)^{n-i}$ factor alternates the addition and subtraction to correct the over-counting and under-counting.

Finally, the total number of valid playlists that contain exactly $n$ unique songs is the sum of these corrected counts: $$\sum_{i=k}^n (-1)^{n - i} \binom{n}{i} f(i) = \sum_{i=k}^n (-1)^{n - i} \frac{n!}{i!(n-i)!} \frac{i!}{(i - k)!} (i - k)^{\text{goal} - k} = n! \sum_{i=k}^n (-1)^{n - i} \frac{(i - k)^{\text{goal} - k}}{(n-i)!(i - k)!}$$.

To calculate each summand quickly, we precalculate factorials and inverse factorials modulo $10^9 + 7$ in the arrays $\text{factorial}$ and $\text{inv\_factorial}$ respectively.

#### Algorithm

1. Initialize the $\text{factorial}$ and $\text{inv\_factorial}$ arrays to precalculate the factorial and inverse factorial values modulo $10^9 + 7$ up to $n$.
2. Calculate the factorial and inverse factorial values using the formula $\text{factorial}[i] = \text{factorial}[i - 1] \cdot i$ and the [Fermat's Little Theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem) respectively.
3. Initialize variables $\text{sign}$ to $1$ and $\text{answer}$ to $0$. These variables will be used to apply the principle of inclusion-exclusion.
4. Iterate $i$ from $n$ down to $k$.
	* Calculate $\text{temp}$ as $\frac{(i - k)^{\text{goal} - k}}{(n-i)!(i - k)!}$, update $\text{answer}$ as $\text{answer} + \text{sign} \cdot \text{temp}$, and update $\text{sign}$ as $-\text{sign}$.
5. Return $n! \cdot \text{answer}$ as the final answer to the problem. This is the number of distinct playlists of length $\text{goal}$ that can be created with $n$ unique songs and obeying the $k$ distance rule.

#### Implementation

<iframe src="https://leetcode.com/playground/RqxSsvDb/shared" frameBorder="0" width="100%" height="500" name="RqxSsvDb"></iframe>

#### Complexity Analysis

* Time Complexity: $O(n \log \text{goal})$.

The main loop runs from $n$ down to $k$, so it iterates $n - k + 1 = O(n)$ times.
Inside the main loop, we calculate the power of $(i - k)$ raised to $(\text{goal} - k)$, which takes $O(\log \text{goal})$ time.

So the total time complexity is $O(n \log \text{goal})$.

* Space Complexity: $O(n)$.

We maintain arrays for precalculated factorials and inverse factorials.