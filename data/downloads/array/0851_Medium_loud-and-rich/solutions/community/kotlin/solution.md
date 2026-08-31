# 2 Kotlin solutions, 1 of which uses a graph, DFS, and memoization

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/5483026/](https://leetcode.com/problems/loud-and-rich/solutions/5483026/)

---

My 2<sup>nd</sup> solution that's efficient and uses a graph, depth-first search (DFS), and memoization. This had a runtime of 328 ms and a memory usage of 50.8 MB.
```
fun loudAndRich(richer: Array<IntArray>, quiet: IntArray): IntArray {
	val numPeople: Int = quiet.size

	// This is used as a graph, namely a directed acyclic graph (DAG).
	val explicitlyRicherPeopleLists: List<MutableList<Int>> =
		List(size = numPeople, init = { ArrayList() })

	for ((richerPerson: Int, poorerPerson: Int) in richer) {
		explicitlyRicherPeopleLists[poorerPerson].add(richerPerson)
	}

	// This is used for memoization.
	val loudestPeople: Array<Int?> = arrayOfNulls(size = numPeople)

	// This returns the loudest person with an amount of money greater than or equal to the param person.
	fun getLoudestPerson(person: Int): Int {
	
		// Return the memoized value if it exists.
		loudestPeople[person]?.let { return it }

		// The base case is when there are no people that are explicitly richer than the param person.
		
		val loudestPerson: Int =
			explicitlyRicherPeopleLists[person]
			.map(::getLoudestPerson)
			.plus(person)
			.minBy { quiet[it] }

		loudestPeople[person] = loudestPerson
		return loudestPerson
	}

	return IntArray(size = numPeople, init = { index: Int -> getLoudestPerson(person = index) })
}
```

My 1<sup>st</sup> solution that's a lot less efficient but got accepted and is still a solution nonetheless, so I'll include it. This had a runtime of 2018 ms and a memory usage of 63.2 MB.
```
fun loudAndRich(richer: Array<IntArray>, quiet: IntArray): IntArray {
	/*
	Let notPoorerPeopleSets be a list of sets where the set at index 0 will contain the IDs of the
	people with an amount of money greater than or equal to person 0 and the set at index 1 will
	contain the IDs of the people with an amount of money greater than or equal to person 1 and so on.
	*/
	val notPoorerPeopleSets: List<MutableSet<Int>> =
		List(size = quiet.size, init = { index: Int -> mutableSetOf(index) })

	for ((richerPerson: Int, poorerPerson: Int) in richer) {
		val peopleNotPoorerThanRicherPerson: Set<Int> = notPoorerPeopleSets[richerPerson]
		notPoorerPeopleSets[poorerPerson].addAll(peopleNotPoorerThanRicherPerson)

		for (set: MutableSet<Int> in notPoorerPeopleSets) {
			if (poorerPerson in set) {
				set.addAll(peopleNotPoorerThanRicherPerson)
			}
		}
	}

	return notPoorerPeopleSets
		.map { set: Set<Int> -> set.minBy { quiet[it] } }
		.toIntArray()
}
```