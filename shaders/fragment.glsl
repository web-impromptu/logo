#if defined(FLAT_SHADED)
	varying vec3 vViewPosition;
#endif

uniform vec3 lightColor;
uniform vec3 shadowColor;

#include <packing>
#include <normal_pars_fragment>

const vec3 lightDirection = vec3(1, -1, -.1);

void main() {
	#include <normal_fragment_begin>

  float brightness = clamp(dot(-normal, normalize(lightDirection)), 0.0, 1.0);

  vec3 color = mix(shadowColor, lightColor, brightness);

	gl_FragColor = vec4(color, 1);
}