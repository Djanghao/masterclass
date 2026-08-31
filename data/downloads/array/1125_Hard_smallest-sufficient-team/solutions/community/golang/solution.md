# Sol

**Author:** dtheriault
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3775009/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3775009/)

---

Many solutions use only [bitmasks](https://en.wikipedia.org/wiki/Mask_(computing)) for the skills (at most 16), but a mask can be used for the people involved as well, as there are at most 60 people (`uint64`).

Another optimization that can be done is a quick determination of which people are redundant, that is, they bring no skills or redundant skills that another person already brings.

```
func smallestSufficientTeam(req_skills []string, people [][]string) []int {
    // Convert the skills of each person into a mask
    peopleSkillBitmask, completedBitmask := buildPeopleSkillMasks(req_skills, people)

    // Optimization: Determine which people have skills that are already covered by other people
    // as there are at most 16 skills, we have the chance that some people
    // are already covered by someone else (e.g. two javascript developers is redundant)
    redundantPeople := findRedundantPeople(peopleSkillBitmask)

    // Use backtracking to determine which people are required
    // Optimization: We'll keep track of the people involved using a bitmask
    // rather than an array
    minimumPeopleRequired := len(people)
    minimumPeopleBitmask := uint64(0)
    var backtrack func (int, int, int, uint64)
    backtrack = func (currentPerson, skillBitmask, peopleRequired int, peopleBitmask uint64) {
        // the current solution has too many people already, stop recursing
        if peopleRequired >= minimumPeopleRequired {
            return
        }
        // we found a solution, stop recursing
        if skillBitmask == completedBitmask {
            minimumPeopleRequired = peopleRequired
            minimumPeopleBitmask = peopleBitmask
            return
        }
        // no solution found after using all people
        if currentPerson == len(people) {
            return
        }

        // include this person
        // only consider this person if they're not redundant
        if !redundantPeople[currentPerson] {
            // only include this person if they have a skill we don't already have
            newBitmask := skillBitmask | peopleSkillBitmask[currentPerson]
            if newBitmask != skillBitmask {
                backtrack(
                    currentPerson + 1,
                    newBitmask,
                    peopleRequired + 1,
                    peopleBitmask | (1 << currentPerson),
                )
            }
        }
        // exclude this person
        backtrack(
            currentPerson + 1,
            skillBitmask,
            peopleRequired,
            peopleBitmask,
        )
    }

    // begin looking for a solution
    backtrack(0, 0, 0, 0)

    // convert the solution we found into the format of the expected answer
    return convertPeopleMaskToIndexes(len(people), minimumPeopleBitmask)
}

func buildPeopleSkillMasks(req_skills []string, people [][]string) ([]int, int) {
    skillMap := make(map[string]int, 16)
    completedBitmask := 0
    bit := 1
    for i := 0; i < len(req_skills); i++ {
        skillMap[req_skills[i]] = bit
        completedBitmask |= bit
        bit <<= 1
    }
    
    peopleSkillBitmask := make([]int, len(people))
    for i := 0; i < len(people); i++ {
        bitmask := 0
        for j := 0; j < len(people[i]); j++ {
            bitmask |= skillMap[people[i][j]]
        }
        peopleSkillBitmask[i] = bitmask
    }

    return peopleSkillBitmask, completedBitmask
}

func findRedundantPeople(peopleSkillBitmask []int) []bool {
    redundantPeople := make([]bool, len(peopleSkillBitmask))
    for i := 0; i < len(peopleSkillBitmask); i++ {
        if peopleSkillBitmask[i] == 0 {
            redundantPeople[i] = true
            continue
        }
        for j := i + 1; j < len(peopleSkillBitmask); j++ {
            inCommon := peopleSkillBitmask[i] & peopleSkillBitmask[j]
            if inCommon == peopleSkillBitmask[j] {
                redundantPeople[j] = true
            } else if inCommon == peopleSkillBitmask[i] {
                redundantPeople[i] = true
            }
        }
    }
    return redundantPeople
}

func convertPeopleMaskToIndexes(people int, minimumPeopleBitmask uint64) []int {
    answer := make([]int, bits.OnesCount64(minimumPeopleBitmask))
    currentIndex := 0
    bit := uint64(1)
    for i := 0; i < people; i++ {
        if minimumPeopleBitmask & bit > 0 {
            answer[currentIndex] = i
            currentIndex++
        }
        bit <<= 1
    }
    return answer
}
```