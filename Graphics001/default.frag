#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;

uniform vec4 lightColor;

void main()
{
	FragColor = vec4(color,1.0f) * lightColor;
}