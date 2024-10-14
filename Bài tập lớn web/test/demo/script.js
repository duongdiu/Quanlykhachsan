document.getElementById("language-selector").addEventListener("change", function() {
    const lang = this.value;
    if (lang === "english") {
        document.getElementById("welcome-message").innerText = "WELCOME TO SKY HOTEL";
        document.getElementById("motto").innerText = "Where dreams meet tranquility.";
        document.getElementById("introduction-title").innerText = "Introduction";
        document.getElementById("introduction-text").innerText = "Sky Hotel is one of the most luxurious and modern hotels in the city center, offering guests a wonderful relaxation experience.";
        document.getElementById("rooms-title").innerText = "Rooms";
        document.getElementById("room-deluxe-title").innerText = "Deluxe Room";
        document.getElementById("room-deluxe-description").innerText = "The Deluxe Room is designed with modern amenities and elegant decor overlooking the poetic Giang Vo Lake.";
        document.getElementById("room-premium-title").innerText = "Premium Executive Suite";
        document.getElementById("room-premium-description").innerText = "The Premium Executive Suite includes a living room and a bedroom overlooking the lake.";
        document.getElementById("services-title").innerText = "Services";
        document.getElementById("service-dining-title").innerText = "Dining Services";
        document.getElementById("service-dining-description").innerText = "Enjoy unique culinary experiences at our restaurant.";
        document.getElementById("service-spa-title").innerText = "Spa & Beauty";
        document.getElementById("service-spa-description").innerText = "Relax and rejuvenate at our spa.";
        document.getElementById("service-event-title").innerText = "Event Organization";
        document.getElementById("service-event-description").innerText = "Whether you are planning a grand birthday party.";
        document.getElementById("service-bar-title").innerText = "Bar";
        document.getElementById("service-bar-description").innerText = "Our bar offers a lively and stylish atmosphere.";
        document.getElementById("review-title").innerText = "Reviews";
        document.getElementById("review1-text").innerText = "\"My vacation at this hotel was wonderful!\"";
        document.getElementById("review2-text").innerText = "\"The hotel is quite okay, but I expected more.\"";
    } else {
        document.getElementById("welcome-message").innerText = "Chào mừng bạn đến vối SKY HOTEL";
        document.getElementById("motto").innerText = "Nơi những giấc mơ hòa quyện với sự bình yên.";
        document.getElementById("introduction-title").innerText = "Giới thiệu";
        document.getElementById("introduction-text").innerText = "Sky Hotel là một trong những khách sạn sang trọng và hiện đại nhất tại trung tâm thành phố, mang đến cho du khách trải nghiệm nghỉ dưỡng tuyệt vời.";
        document.getElementById("rooms-title").innerText = "Phòng";
        document.getElementById("room-deluxe-title").innerText = "Phòng Deluxe";
        document.getElementById("room-deluxe-description").innerText = "Phòng Deluxe được thiết kế với các trang thiết bị hiện đại, cách bày trí sang trọng và ấn tượng cùng hướng nhìn ra hồ Giảng Võ thơ mộng.";
        document.getElementById("room-premium-title").innerText = "Phòng Premium Executive Suite";
        document.getElementById("room-premium-description").innerText = "Phòng Premium Executive Suite bao gồm một phòng khách và phòng ngủ hướng ra Hồ.";
        document.getElementById("services-title").innerText = "Dịch vụ";
        document.getElementById("service-dining-title").innerText = "Dịch vụ ăn uống";
        document.getElementById("service-dining-description").innerText = "Tận hưởng những trải nghiệm ẩm thực độc đáo tại nhà hàng của chúng tôi.";
        document.getElementById("service-spa-title").innerText = "Spa & Làm đẹp";
        document.getElementById("service-spa-description").innerText = "Thư giãn và phục hồi tại spa của chúng tôi.";
        document.getElementById("service-event-title").innerText = "Tổ chức sự kiện";
        document.getElementById("service-event-description").innerText = "Cho dù bạn đang lên kế hoạch cho một buổi tiệc sinh nhật hoành tráng.";
        document.getElementById("service-bar-title").innerText = "Quầy Bar";
        document.getElementById("service-bar-description").innerText = "Quầy bar của chúng tôi mang đến không gian sôi động và phong cách.";
        document.getElementById("review-title").innerText = "Đánh giá";
        document.getElementById("review1-text").innerText = "\"Kỳ nghỉ tại khách sạn này thật tuyệt vời!\"";
        document.getElementById("review2-text").innerText = "\"Khách sạn khá ổn, nhưng tôi mong đợi nhiều hơn.\"";
    }
});