---
---
{% if site.url == "http://localhost:4000" or site.url contains "https" %}
	{% assign secure = "http" %}
{% else %}
	{% assign secure = "https" %}
{% endif %}
$(document).ready(function(){
  setTimeout(function(){
      window.location.href= "{{"" | absolute_url | replace: "http", secure }}";
  }, 4000);
});
