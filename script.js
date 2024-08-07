//your JS code here. If required.
function removeSelectedColor() {
	var select = document.getElementById('colorSelect');
	select.remove(select.selectedIndex);
}