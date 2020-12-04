uniform sampler2D sphereTexture; 
varying vec2 vUv;
varying float noise;
varying vec3 vNormal;
void main() {
	vec2 uv = normalize( vNormal ).xy * 0.5 + 0.5;
	// vec4 texto = texture( sphereTexture, uv*40. );
    float noiseColor = 1. - .4 * noise;
    vec3 color = vec3(noiseColor);
    // gl_FragColor = vec4( color.rgb, 1.0 ) * texture;
    gl_FragColor = vec4(color, 1.0);
}