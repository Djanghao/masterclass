# Step by step optimization, more than 10 methods

**Author:** alvin-777
**Votes:** 109
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/935522/](https://leetcode.com/problems/distribute-repeating-integers/solutions/935522/)

---

> This is a very long post.
> I've been thinking about this problem for many days, trying to optimize it.
> This post shows step by step how I managed to reach the optimised methods.
> But I feel this is not yet the end. If one day I find a better solution, I will come back and update this post.
> Hope it helps. :)

# Transformation

First of all, the problem description is kind of... weird. Distributing n repeating numbers to m customers? That is a bit difficult to imagine and understand (at least for me).

However, let's do a simple "transformation", it will immediately become much clearer:
- In any case, the first thing we have to do, is ***counting the frequency of each number*** in `nums`. We don't care about what the numbers are, but only the quantity.
- For any number, if the quantity of it is >= a customer's order, we can distribute the number to that customer. And of course if the rest quantity of this number can satisfy any other customer's order, we can continue distributing it.
	- For example, if we have *10* of number `a`, and we have customer orders *5*, *3*, and *1*, we can satisfy all 3 customers by number `a`.
- We want to figure out if we can satisfy all customers.

Now the problem can be transformed to:

> **We have N _containers/boxes/slots_, and we want to fit M _items/objects/sticks_ into them. Or, we want to allocate M chunks of _memory blocks/file spaces_ from fragmented _memory/hard drive_, which have N _continuous free spaces_.**

Much easier to imagine now, isn't it? Code for the transformation would like:

```cpp
bool canDistribute(vector<int>& nums, vector<int>& quantity) {
	unordered_map<int, int> fm;
	for (int n : nums) ++fm[n];
	vector<int> counts;
	for (auto [ignore, f] : fm) counts.push_back(f);
	return CanAllFit(counts, quantity);
}

bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
    // ...
}
```

From now on, I will be only talk about **fitting _ITEMS_ into _CONTAINERS_**, and show how to implement the `CanAllFit(contSize, itemSize)` function.

----

# Solutions

To solve this problem, there are basically two directions:
1. For each _item_, try to put it into any _container_ that has enough space.
2. For each _container_, try any _combination of item(s)_ that total size is <= the container size.

Note: 

- There exist other methods, but I will mainly focus on **Backtracking**.
- The times in the brackets are only based on current testcases. It is totally possible that in the future more testcases are added and the numbers become inaccurate. Some methods may even become TLE, even if they are AC now.

## For each item, try the containers

#### Ver 1 - Straightforward backtracking (TLE)

Basically try all possible combinations

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	function<bool(int)> BT;
	BT = [&](int i) {
		int szItem = itemSize[i];
		for (int &szCont : contSize) {
			if (szCont < szItem) continue;
			if (i == itemSize.size() - 1) return true;
			szCont -= szItem;
			if (BT(i + 1)) return true;
			szCont += szItem;
		}
		return false;
	};
	return BT(0);
}
```

#### Ver 1.1 - Sort items by size in descending order (700+ms)

Ver 1 would go TLE for testcases like: 
- container sizes: [2,2,2,...,2] (50 containers with all size of 2)
- item sizes: [2,2,2,...,2,3] (9 of size 2 and 1 of size 3)

Reason: it's actually trying every single way to fit the first 9 2s into the 50 containers - for example, it tries to put item1 in container1, then container2, then container3... Even if that makes absolutely no difference. In the worst case, it would try 50<sup>10</sup> times before it can return false.

On the other side, we can notice that: if we start with the biggest item, **once we find a bigger item that cannot fit into any of the rest containers, it fails. We don't need to care about any of the smaller ones**.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(itemSize.begin(), itemSize.end(), greater<int>()); // sort in descending order

	function<bool(int)> BT;
	BT = [&](int i) {
		int szItem = itemSize[i];
		for (int &szCont : contSize) {
			if (szCont < szItem) continue;
			if (i == itemSize.size() - 1) return true;
			szCont -= szItem;
			if (BT(i + 1)) return true;
			szCont += szItem;
		}
		return false;
	};
	return BT(0);
}
```

Now some one may ask: what if we can fit all the bigger ones but only not the smallest one? Would it be in the same situation?
No, it's not the same. In the worst case, say, we can fit first 9 (bigger) items but only not the last one, we'll have **at most** 9 bigger containers for these items, (if we have one more container that can fit any of the bigger item, it will definitely fit the smaller one) so we try at most 9<sup>9</sup> times. This is definitely not good enough (and we'll continue optimise it later) but much better than Ver 1.

Note:
> If a testcase results a `true`, the calculation is usually very fast (we find any solution and we are done). It's those testcases require you to _try all the possibilities and eventually fail_ time consuming.

#### Ver 1.2 - Data Preprocess (Pruning) (236ms)

In addition to sorting the item by size, we can do more preprocesses to make the calculation faster:
- Sort the items by size, as well as the containers
- If any container is smaller than the smallest item, it's useless. Get rid of them.
- If a container can just fit the smallest item (same size), we should put the item in that container, and forget about them. Prove:
	- If we don't put the smallest item in the container with same size, and there exists a solution, the container must be empty (since it cannot fit any bigger item), and we can always move the smallest item into that container and all other items still fit.
	- If we put the smallest into the container with same size and cannot fit all other items, put it in another container (leave the one with same size empty, since it can't fit any bigger item) will only make less room. We still cannot fit all other items.
- If the smallest container left (bigger than the smallest item) can only fit one item (smaller than the sum of the two smallest items left), we find _the biggest item that fits it_ and put the item in it. Prove:
	- Say, the biggest item that smaller or the same to the smallest container `C` is `X`. If we don't put X in C, and there exists a solution, then C is either empty or has _ONE_ smaller (than X) item in it, and X is in a bigger container. We can always move X into C (if empty) or swap X with the smaller item and still have a solution (return true).
	- Similar to above, if there's no solution when putting X in C, moving/swapping X out of C will not make more room, and there's still no solution.
- After the preprocess, if there's no item left, we successfully fitted all items, return true.
- Otherwise if there's no container left, no way to fit rest of the items, return false.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(contSize.begin(), contSize.end(), greater<int>());
	sort(itemSize.begin(), itemSize.end(), greater<int>());

	while (!contSize.empty() && !itemSize.empty()) {
		if (contSize.back() < itemSize.back()) contSize.pop_back();
		else if (itemSize.size() == 1 || contSize.back() == itemSize.back()) contSize.pop_back(), itemSize.pop_back();
		else if (contSize.back() < itemSize.back() + itemSize[itemSize.size() - 2]) {
			itemSize.erase(lower_bound(itemSize.begin(), itemSize.end(), contSize.back(), greater<int>()));
			contSize.pop_back();
		} else break;
	}
	if (itemSize.empty()) return true;
	if (contSize.empty()) return false;

	function<bool(int)> BT;
	BT = [&](int i) {
		int szItem = itemSize[i];
		for (int &szCont : contSize) {
			if (szCont < szItem) continue;
			if (i == itemSize.size() - 1) return true;
			szCont -= szItem;
			if (BT(i + 1)) return true;
			szCont += szItem;
		}
		return false;
	};

	return BT(0);
}
```

#### Ver 1.3 - Grouping the container sizes (216ms)

From Ver 1.1 we realised that we are doing a lot of duplicated calculations.
We may be able to use dynamic programming (DP) to remember calculated subresults. However, there is a problem: if we put one item into a container, it's still possible to fit other item(s) into that container. This makes applying DP trickier.

But don't worry. There is a simpler method: (Inspired by the problem [[subsets II](https://leetcode.com/problems/subsets-ii/)])
- Group the containers by size
- We try to put an item in one container, if we failed to find a solution, then we don't bother putting that item in other containers with same size - just try a container with different size.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(itemSize.begin(), itemSize.end(), greater<int>());

	map<int, int, greater<int>> contSizeCount; // [key: sizes of containers | val: number of containers of this size]
	for (int n : contSize) ++contSizeCount[n];

	function<bool(int)> BT;
	BT = [&](int i) {
		int szItem = itemSize[i];
		for (auto &[szCont, c] : contSizeCount) {
			if (!c || szCont < szItem) continue;
			if (i == itemSize.size() - 1) return true;
			--c, ++contSizeCount[szCont - szItem];
			if (BT(i + 1)) return true;
			++c, --contSizeCount[szCont - szItem];
		}
		return false;
	};
	return BT(0);
}
```

#### Ver 1.4 - Combine Ver 1.2 and 1.3 (200ms)

Note: even though methods used in ver 1.2 and 1.3 are completely different, they are both trying to reduce the cases that we need to calculate. So the improvement is rather less significant by combining both.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(contSize.begin(), contSize.end(), greater<int>());
	sort(itemSize.begin(), itemSize.end(), greater<int>());

	while (!contSize.empty() && !itemSize.empty()) {
		if (contSize.back() < itemSize.back()) contSize.pop_back();
		else if (itemSize.size() == 1 || contSize.back() == itemSize.back()) contSize.pop_back(), itemSize.pop_back();
		else if (contSize.back() < itemSize.back() + itemSize[itemSize.size() - 2]) {
			itemSize.erase(lower_bound(itemSize.begin(), itemSize.end(), contSize.back(), greater<int>()));
			contSize.pop_back();
		} else break;
	}
	if (itemSize.empty()) return true;
	if (contSize.empty()) return false;

	map<int, int> contSizeCount; // [key: sizes of containers | val: number of containers of this size]
	for (int n : contSize) ++contSizeCount[n];

	function<bool(int)> BT;
	BT = [&](int i) {
		int szItem = itemSize[i];
		for (auto &[szCont, c] : contSizeCount) {
			if (!c || szCont < szItem) continue;
			if (i == itemSize.size() - 1) return true;
			--c, ++contSizeCount[szCont - szItem];
			if (BT(i + 1)) return true;
			++c, --contSizeCount[szCont - szItem];
		}
		return false;
	};
	return BT(0);
}
```

----

## For each container, try the all combinations of items that fit it

Now let's look at the other way around.

In this method, we use a **bit mask** to represent the combination of items.
For each container, we try ALL combinations of items (mask from 0 to all 1s)

Note: 
- `(1 << N) - 1` => a mask with N trailing 1s
- `if ((mask & avail) != mask)` => check if exists any 1 in `mask` is 0 at the same bit in `avail` => check if any item chosen for the combination is not available
- `avail ^ mask` => remove all 1 bits in `mask` from `avail` (mask is a subset of avail)

#### Ver 2 - Try All Combinations (TLE)

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		for (int mask = 0; mask < (1 << itemSize.size()); ++mask) {
			if ((mask & avail) != mask) continue;
			int sum = 0;
			for (int j = 0; (1 << j) <= mask; ++j)
				if ((1 << j) & mask) sum += itemSize[j];
			if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
		}
		return false;
	};
	return BT(0, (1 << itemSize.size()) - 1);
}
```

#### Ver 2.0.1 - Try All Submasks (TLE)

We can improve Ver2 slightly by calculating **next subset mask** directly instead of iterating through 0 to all 1s:
- `mask = (mask - 1) & avail`

For more details, read [this](https://cp-algorithms.com/algebra/all-submasks.html)

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		for (int mask = avail; ; mask = (mask - 1) & avail) {
			int sum = 0;
			for (int j = 0; (1 << j) <= mask; ++j)
				if ((1 << j) & mask) sum += itemSize[j];
			if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
			if (!mask) break;
		}
		return false;
	};
	return BT(0, (1 << itemSize.size()) - 1);
}
```

#### Ver 2.1 Dynamic Programming (700+ms)

Ver 2.0.1 still runs TLE. This is because we were repeatedly calculating the _same subproblem_.
For example:
1. Suppose we put item A and B in container 1, and put C in container 2, then try to fit all the rest items into the rest containers and failed to find a solution. `[A, B][C]......`
2. We then move item B from container 1 to container 2, then we do the exactly same calculation for the rest. `[A][B, C]......`

This is the perfect situation to apply ***dynamic programming***.

For container _i_ and available item subset, we mark it `true` if we have checked it (and failed to find a solution), so we don't need to check it again.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	vector<vector<bool>> dp(contSize.size(), vector(1 << itemSize.size(), false));
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		if (dp[i][avail]) return false;
		for (int mask = avail; ; mask = (mask - 1) & avail) {
			int sum = 0;
			for (int j = 0; (1 << j) <= mask; ++j)
				if ((1 << j) & mask) sum += itemSize[j];
			if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
			if (!mask) break;
		}
		dp[i][avail] = true;
		return false;
	};

	return BT(0, (1 << itemSize.size()) - 1);
}
```

#### Ver 2.2 DP with Remembered Subset Sums (448ms)

In Ver 2.1, we calculate the sum of a subset (total size of chosen items) every time.
We can take one step further from by **remembering those sums**.
(I saw some other solutions that _precalculate_ all the sums, that also works. However, apparently we don't need _all_ of them. So this method would be faster)

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	vector<int> subsetSum(1 << itemSize.size(), 0);
	vector<vector<bool>> dp(contSize.size(), vector(1 << itemSize.size(), false));
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		if (dp[i][avail]) return false;
		for (int mask = avail; ; mask = (mask - 1) & avail) {
			if (mask) {
				int sum = subsetSum[mask];
				if (!sum) {
					for (int j = 0; (1 << j) <= mask; ++j)
						if ((1 << j) & mask) sum += itemSize[j];
					subsetSum[mask] = sum;
				}
				if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
			} else {
				if (BT(i + 1, avail)) return true;
				break;
			}
		}
		dp[i][avail] = true;
		return false;
	};

	return BT(0, (1 << itemSize.size()) - 1);
}
```

#### Ver 2.3 DP with Preprocess (544ms)

Other than DP, we can also apply the pruning explained in Ver 1.2 to this method.

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(contSize.begin(), contSize.end(), greater<int>());
	sort(itemSize.begin(), itemSize.end(), greater<int>());

	while (!contSize.empty() && !itemSize.empty()) {
		if (contSize.back() < itemSize.back()) contSize.pop_back();
		else if (itemSize.size() == 1 || contSize.back() == itemSize.back()) contSize.pop_back(), itemSize.pop_back();
		else if (contSize.back() < itemSize.back() + itemSize[itemSize.size() - 2]) {
			itemSize.erase(lower_bound(itemSize.begin(), itemSize.end(), contSize.back(), greater<int>()));
			contSize.pop_back();
		} else break;
	}
	if (itemSize.empty()) return true;
	if (contSize.empty()) return false;

	vector<vector<bool>> dp(contSize.size(), vector(1 << itemSize.size(), false));
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		if (dp[i][avail]) return false;
		for (int mask = avail; ; mask = (mask - 1) & avail) {
			int sum = 0;
			for (int j = 0; (1 << j) <= mask; ++j)
				if ((1 << j) & mask) sum += itemSize[j];
			if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
			if (!mask) break;
		}
		dp[i][avail] = true;
		return false;
	};

	return BT(0, (1 << itemSize.size()) - 1);
}
```

#### Ver 2.4 Combine Ver 2.2 & 2.3 (388ms)

Then combine DP and preprocessing together:

```cpp
bool CanAllFit(vector<int> &contSize, vector<int> &itemSize) {
	sort(contSize.begin(), contSize.end(), greater<int>());
	sort(itemSize.begin(), itemSize.end(), greater<int>());

	while (!contSize.empty() && !itemSize.empty()) {
		if (contSize.back() < itemSize.back()) contSize.pop_back();
		else if (itemSize.size() == 1 || contSize.back() == itemSize.back()) contSize.pop_back(), itemSize.pop_back();
		else if (contSize.back() < itemSize.back() + itemSize[itemSize.size() - 2]) {
			itemSize.erase(lower_bound(itemSize.begin(), itemSize.end(), contSize.back(), greater<int>()));
			contSize.pop_back();
		} else break;
	}
	if (itemSize.empty()) return true;
	if (contSize.empty()) return false;

	vector<int> subsetSum(1 << itemSize.size(), 0);
	vector<vector<bool>> dp(contSize.size(), vector(1 << itemSize.size(), false));
	function<bool(int, int)> BT;
	BT = [&](int i, int avail) {
		if (!avail) return true;
		if (i == contSize.size()) return false;
		if (dp[i][avail]) return false;
		for (int mask = avail; ; mask = (mask - 1) & avail) {
			if (mask) {
				int sum = subsetSum[mask];
				if (!sum) {
					for (int j = 0; (1 << j) <= mask; ++j)
						if ((1 << j) & mask) sum += itemSize[j];
					subsetSum[mask] = sum;
				}
				if (sum <= contSize[i] && BT(i + 1, avail ^ mask)) return true;
			} else {
				if (BT(i + 1, avail)) return true;
				break;
			}
		}
		dp[i][avail] = true;
		return false;
	};

	return BT(0, (1 << itemSize.size()) - 1);
}
```
