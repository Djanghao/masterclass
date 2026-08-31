# Solucion español rust lang

**Author:** ErikFantomex
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/4281665/](https://leetcode.com/problems/high-access-employees/solutions/4281665/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Mi primer pensamiento para resolver este problema es agrupar los tiempos de acceso por empleado y luego analizar estos tiempos para identificar a los empleados con "acceso frecuente", definido como aquellos que acceden al menos tres veces en un per\xEDodo de 60 minutos.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Agrupaci\xF3n de Tiempos de Acceso**: Agrupar los tiempos de acceso por empleado utilizando un HashMap.
2. **An\xE1lisis de Acceso Frecuente**: Para cada empleado, ordenar sus tiempos de acceso y verificar si hay al menos tres accesos dentro de cualquier ventana de 60 minutos.
3. **Identificar Empleados con Acceso Frecuente**: Marcar a los empleados que cumplen con el criterio de acceso frecuente y agregarlos a la lista de resultados.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
La complejidad de tiempo es $$O(n \\log n)$$, principalmente debido a la necesidad de ordenar los tiempos de acceso para cada empleado, donde $$n$$ es el n\xFAmero total de registros de acceso.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
La complejidad de espacio es $$O(n)$$, ya que almacenamos todos los tiempos de acceso en un HashMap.

# Code
```rust
use std::collections::HashMap;

impl Solution {
   
