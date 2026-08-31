# With class

**Author:** geLz8qFQCA
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/5117943/](https://leetcode.com/problems/loud-and-rich/solutions/5117943/)

---


# Code
```

class Person {
    id: number
    quiet: number
    minQuiet: number
    quoitestId: number
    poorer: Person[] 
    constructor(id: number, quiet: number) {
        this.id = id;
        this.quiet = quiet;
        this.quoitestId = id
        this.minQuiet = quiet;
        this.poorer = []
    }
    private setReacherQuiet(quiet: number, id: number) {
        if (this.minQuiet > quiet) {
            this.minQuiet = quiet
            this.quoitestId = id
            for(let p of this.poorer) {
                p.setReacherQuiet(quiet, id)
            }
            
        } 
    }
    addPoorer(p:Person) {
        this.poorer.push(p)
        p.setReacherQuiet(this.minQuiet, this.quoitestId)
    }
}

function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const persons = quiet.map((quiet, id)=> new Person(id, quiet))
    for (const [reach,poor] of richer) {
        persons[reach].addPoorer(persons[poor])
    }
    return persons.map(x=>x.quoitestId)
};
```