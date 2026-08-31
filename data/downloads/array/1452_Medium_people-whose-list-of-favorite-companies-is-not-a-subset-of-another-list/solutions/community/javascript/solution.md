# Fastest JavaScript (3 solutions) w/explanation

**Author:** stevenkinouye
**Votes:** 4
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/637588/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/637588/)

---

# Using the metaphor of Big Fish Eats Little Fish
The basic concept is to find the person with the most amount of companies and eliminate all the people that are all the subset of itself.  This way, all the people that are eliminated, we don't need to see if other people are a subset of them because the person that had more companies would've eliminated any people with subsets less than or equal to the eliminated person

```javascript
// helper method on set to see if current set is the subset of another
Set.prototype.isSubSet = function(set) {
    for (const value of this) {
        if (!set.has(value)) return false;
    }
    return true;
}

var peopleIndexes = function(favoriteCompanies) {
	
	// use an ordered set to keep possible people
    const people = new Set();
	
	// keep a set to see who do we need to check
    const peopleToCheck = new Set();
	
    for (let i = 0; i < favoriteCompanies.length; i++) {
        people.add(i);
        peopleToCheck.add(i);
		
		// convert all people's companies into a set so we can see if one set is the
		// subset of another in O(n) time rather than O(n^2) time
        favoriteCompanies[i] = new Set(favoriteCompanies[i])
    }


    while (peopleToCheck.size > 0) {
		// get the next person in the set
		// it really doesn't matter which person we get
		// it just matters that we need to check this person in comparison to all others
        const person1 = peopleToCheck.values().next().value;
		
        peopleToCheck.delete(person1);
        const person1Companies = favoriteCompanies[person1];
		
		// check person1 against all other people remaining to be checked
        for (let person2 of peopleToCheck) {
            const person2Companies = favoriteCompanies[person2];
			
			// if person 1 is larger than person 2 and person 2 is a subset of person 1
			// we can delete person 2 from the possible people and from the people to check
			// because we know that person 1 will find all other people that are subsets of person 2
            if (person2Companies.size <= person1Companies.size) {
                if (person2Companies.isSubSet(person1Companies)) {
                    peopleToCheck.delete(person2);
                    people.delete(person2);
					
					// if person2 is a subset of person 1 and the size is the same then they are subsets of each other
                    if (person1Companies.size == person2Companies.size) people.delete(person1);
                }
			
			// if person 1 is smaller then we want to delete the person
            } else if (person1Companies.isSubSet(person2Companies)) {
                people.delete(person1);
            }
        }        
    }
    return [...people];
};
```

```javascript
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// SAME AS ABOVE USING SORTING IN DESCENDING ORDER
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
Set.prototype.isSubSet = function(set) {
    for (const value of this) {
        if (!set.has(value)) return false;
    }
    return true;
}
/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
    const result = new Set();
    const people = []
    for (let i = 0; i < favoriteCompanies.length; i++) {
        result.add(i);
        people.push(i);
        favoriteCompanies[i] = new Set(favoriteCompanies[i])
    }
    people.sort((a,b) => favoriteCompanies[b].size - favoriteCompanies[a].size)
    for (let i = 0; i < people.length; i++) {
        const bigPerson = people[i];
		
		// if the big person has already been eliminated from the result
		// we know we don't have to check this person because the larger person
		// has already eliminated all the subsets of this person
        if (!result.has(bigPerson)) continue;
		
        const bigPersonCompanies = favoriteCompanies[bigPerson]
        for (let j = i + 1; j < people.length; j++) {
            const smPerson = people[j];
            const smPersonCompanies = favoriteCompanies[smPerson]
            if (smPersonCompanies.isSubSet(bigPersonCompanies)) {
                result.delete(smPerson);
                if (bigPersonCompanies.size == smPersonCompanies.size) result.delete(bigPerson);
            }
        }
    }
    return [...result];
};
```
```javascript
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// SAME SOLUTION USING BITWISE
// Fastest @ 120ms
// people = favoriteCompanies.length
// Time: O(people ^ 2)
// Space O(people)
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*
Same solution using bitwise to mask the companies
0 will stand for the company is not in this person's set
1 will stand for the company is in this person's set
*/
var peopleIndexes = function(favoriteCompanies) {
    const people = favoriteCompanies.map((_, i) => i);
    const result = new Set(people);
    people.sort((a,b) => favoriteCompanies[b].length - favoriteCompanies[a].length)

    const companies = new Map();
    let offset = 0;
    for (let person = 0; person < favoriteCompanies.length; person++) {
        let companiesMask = BigInt(0);
        for (const company of favoriteCompanies[person]) {
            if (!companies.has(company)) {
                const bitMask = BigInt(2) ** BigInt(offset)
                companies.set(company, bitMask);
                offset++;
            }
            companiesMask |= companies.get(company);
        }
        favoriteCompanies[person] = companiesMask;
    }

    for (let i = 0; i < people.length; i++) {
        const lgPerson = people[i];
        if (!result.has(lgPerson)) continue;
        const lgPersonCompanies = favoriteCompanies[lgPerson]
        for (let j = i + 1; j < people.length; j++) {
            const smPerson = people[j];
            const smPersonCompanies = favoriteCompanies[smPerson];
			
			// if they both have the same companies delete both from result
            if (smPersonCompanies === lgPersonCompanies) {
                result.delete(smPerson);
                result.delete(lgPerson);
				
				
			// if the small person is a subset of the larger person, delete the smaller person from result
            } else if ((lgPersonCompanies & smPersonCompanies) === smPersonCompanies) {
                result.delete(smPerson);
            }
        }
    }
    return [...result];
};
```