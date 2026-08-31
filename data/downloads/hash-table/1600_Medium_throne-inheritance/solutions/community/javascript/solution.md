# DFS JavaScript

**Author:** rockwell153
**Votes:** 2
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/868858/](https://leetcode.com/problems/throne-inheritance/solutions/868858/)

---

```
const ThroneInheritance = function(kingName) {
    this.dead = new Map()
    this.map  = new Map()
    
    this.map.set( 'king', [] )
}

ThroneInheritance.prototype.birth = function(parentName, childName) {
    this.map.get( parentName ).push( childName )
    this.map.set( childName, [] )
}

ThroneInheritance.prototype.death = function(name) {
    this.dead.set( name, true )
}

ThroneInheritance.prototype.getInheritanceOrder = function() {
    const r = ( parent, order ) => {
        if ( ! this.dead.has( parent ) ) order.push( parent )

        this.map
            .get( parent )
            .forEach( child => r( child, order ) )
        
        return order
    }
    
    return r( 'king', [] )
}
```