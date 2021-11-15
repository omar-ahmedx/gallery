import React, { useState, useEffect } from "react";
import "../styles/popup.css";
function Popup(props) {
  const [img, setImg] = useState({});

  const fetchImg = async (id) => {
    const data = await fetch(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Client-ID DQaFpKIb4SDgRO6EEkdTb3CpBDSsmjgsx9pF63fD1v0",
      },
    });
    const img = await data.json();
    setImg(img);
  };

  useEffect(() => {
    fetchImg(props.id);
  }, [props.id]);

  return (
    <div className="popup-box">
      <div className="popup-img-container">
        <div
          className="close"
          onClick={() => {
            props.open(false);
            document.querySelector("body").style.overflow = "auto";
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262" />
          </svg>
        </div>
        <div className="img-container">
          <img
            className="popup-img"
            src={img.urls ? img.urls.regular : ""}
            alt={img ? img.alt_description : ""}
          />
        </div>
        <div className="img-info">
          <div className="creator-info">
            <img
              className="avatar"
              src={img.user ? img.user.profile_image.medium : ""}
              alt="avatar"
            />
            <div>
              <p>{img.user ? img.user.name : ""}</p>
              <p className="creator-account">
                @ {img.user ? img.user.username : ""}
              </p>
            </div>
            <p className="social">
              {img.user ? img.user.social.instagram_username : ""}
            </p>
            <p className="social">{img.user ? img.user.social.twitter : ""}</p>
          </div>
          <div className="likes">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 444 45C 452 57 455 70 458 83C 464 109 466 138 469 149C 495 258 570 318 650 423C 650 423 651 423 651 423C 651 423 651 424 651 424C 665 445 675 472 675 500C 675 500 675 850 675 850C 675 866 668 876 659 884C 651 893 641 900 625 900C 601 900 544 909 524 918C 469 943 397 978 306 978C 244 978 193 982 118 940C 118 940 118 940 118 940C 118 940 118 939 118 939C 95 925 88 901 85 878C 83 861 84 844 87 828C 73 810 63 787 56 762C 50 736 48 708 54 682C 37 653 26 629 25 602C 24 577 33 552 47 525C 24 472 33 422 59 390C 87 355 131 338 172 344C 172 344 171 344 171 344C 171 344 193 346 220 347C 247 347 279 344 292 339C 292 339 292 339 292 339C 295 323 289 310 278 287C 266 263 250 230 250 187C 250 117 275 72 308 48C 341 24 379 22 402 22C 420 22 436 33 444 45C 444 45 444 45 444 45M 337 89C 317 103 300 128 300 187C 300 218 311 240 323 265C 335 290 349 320 339 356C 334 374 321 381 311 385C 283 397 248 397 219 397C 189 396 165 393 165 393C 165 393 165 393 165 393C 165 393 164 393 164 393C 143 390 114 401 98 421C 82 442 74 470 97 513C 97 513 103 525 103 525C 103 525 97 537 97 537C 80 567 75 585 75 601C 76 617 83 635 102 665C 102 665 108 675 108 675C 108 675 104 686 104 686C 99 702 99 726 105 750C 111 773 122 794 132 804C 132 804 141 814 141 814C 141 814 138 828 138 828C 135 840 133 858 135 873C 136 887 142 895 143 896C 209 934 241 928 306 928C 384 928 447 897 503 872C 503 872 503 872 503 872C 539 856 593 851 625 850C 621 850 623 850 624 849C 625 848 625 848 625 848C 625 848 625 500 625 500C 625 488 616 462 610 452C 534 353 451 286 421 161C 421 161 421 161 421 161C 421 161 421 161 421 161C 416 140 414 114 410 94C 407 84 404 76 402 73C 401 72 401 72 401 72C 383 72 357 75 337 89C 337 89 337 89 337 89M 961 395C 975 409 980 430 980 451C 980 451 981 874 981 874C 981 895 976 916 962 931C 948 946 927 951 905 951C 905 951 805 950 805 950C 784 950 764 946 748 932C 732 919 725 897 725 875C 725 875 725 450 725 450C 725 428 732 407 748 393C 764 380 784 375 805 375C 805 375 905 375 905 375C 926 375 947 380 961 395C 961 395 961 395 961 395M 805 425C 791 425 784 428 781 431C 778 434 775 437 775 450C 775 450 775 450 775 450C 775 450 775 875 775 875C 775 888 778 892 780 894C 783 897 791 900 805 900C 805 900 906 901 906 901C 919 901 923 899 925 896C 928 894 931 888 931 875C 931 875 930 451 930 451C 930 437 927 432 925 430C 923 427 919 425 905 425C 905 425 805 425 805 425M 930 800C 930 841 896 875 855 875C 814 875 780 841 780 800C 780 759 814 725 855 725C 896 725 930 759 930 800C 930 800 930 800 930 800M 830 800C 830 814 841 825 855 825C 869 825 880 814 880 800C 880 786 869 775 855 775C 841 775 830 786 830 800C 830 800 830 800 830 800"
                transform="translate(1000,0) scale(-1,1)"
              />
            </svg>
            <p>
              {img.likes / 1000 > 0.9
                ? (img.likes / 1000).toFixed(1) + "K"
                : img.likes}
            </p>
          </div>
        </div>
        <div className="related-tags">
          <p>Related Tags</p>
          <div className="tags-container">
            {img.tags
              ? img.tags.map((tag, id) => (
                  <div key={id} className="tag">
                    {tag.title}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
