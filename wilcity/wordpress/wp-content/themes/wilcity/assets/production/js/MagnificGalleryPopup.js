! function() {
	"use strict";
	! function(i) {
		i.fn.wilcityMagnificGalleryPopup = function() {
			var e = i(this);
			e.removeData("magnificPopup");
			var a = e.data("gallery");
			if (void 0 === a || "" === a) return !1;
			for (var t = a.split(","), n = [], r = 0; r < t.length; r++) n.push({
				src: t[r]
			});
			e.magnificPopup({
				items: n,
				gallery: {
					enabled: !0
				},
				type: "image"
			})
		}, i(document).ready(function() {
			i(".wilcity-preview-gallery").each(function() {
				i(this).wilcityMagnificGalleryPopup()
			})
		})
	}(jQuery)
}();