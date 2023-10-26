#if defined(FLAT_SHADED)
	varying vec3 vViewPosition;
#endif

#include <normal_pars_vertex>

void main() {
	#include <beginnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <project_vertex>

#if defined(FLAT_SHADED)
	vViewPosition = - mvPosition.xyz;
#endif
}