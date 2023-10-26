#if defined(FLAT_SHADED)
	varying vec3 vViewPosition;
#endif

uniform vec3 lightDirection;
uniform vec3 lightColor;
uniform vec3 shadowColor;
uniform float brightness;
uniform float contrast;

#include <packing>
#include <normal_pars_fragment>

const float thresholdMap[16] = float[](
  0.0,    0.5,    0.125,  0.625,
  0.75,   0.25,   0.875,  0.375,
  0.1875, 0.6875, 0.0625, 0.5625,
  0.9375, 0.4375, 0.8125, 0.3125
);

vec3 bayerDithering(vec2 position, float value) {
  int x = int(mod(position.x, 4.0));
  int y = int(mod(position.y, 4.0));
  int index = x + y * 4;

  float threshold = thresholdMap[index];
  vec3 color = value < threshold ? shadowColor : lightColor;
  return color;
}

void main() {
	#include <normal_fragment_begin>

  // Get pixel light value
  float value = clamp(dot(-normal, normalize(lightDirection)), 0.0, 1.0);

  // Adjust brightness and contrast
  value += brightness;
  value = ((value - 0.5) * max(contrast, 0.0)) + 0.5;

  // Apply dithering
  vec3 color = bayerDithering(gl_FragCoord.xy, value);
	gl_FragColor = vec4(color, 1);
}