import React from "react";

function CustomersSection() {
  return (
    <div className="mt-10 mb-10">
      <h2 align="center" className="mb-2">
        Ett urval av våra kunder
      </h2>
      <div className="container">
        <div className="row align-center">
          {/* Customer 1 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive br-1 theme--light"
              style={{ width: "180px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "18.8333%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture/image_uploads/ea55aad7-35c3-4bdc-b074-32e331a270cc/original.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "1200px" }}
              ></div>
            </div>
          </div>

          {/* Customer 2 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive theme--light"
              style={{ width: "60px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "100%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://actlocal.se/_nuxt/img/hawaii.bf5d9e1.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "52px" }}
              ></div>
            </div>
          </div>

          {/* Customer 3 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive theme--light"
              style={{ width: "120px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "34.6667%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://actlocal.se/_nuxt/img/jbil.3abc89c.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "150px" }}
              ></div>
            </div>
          </div>

          {/* Customer 4 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive theme--light"
              style={{ width: "80px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "37.4101%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://actlocal.se/_nuxt/img/hinton.7cb596b.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "139px" }}
              ></div>
            </div>
          </div>

          {/* Customer 5 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive theme--light"
              style={{ width: "80px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "68.4211%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://actlocal.se/_nuxt/img/mobilpart.93f7020.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "76px" }}
              ></div>
            </div>
          </div>

          {/* Customer 6 */}
          <div align="center" className="col">
            <div
              className="v-image v-responsive theme--light"
              style={{ width: "120px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "12.3457%" }}
              ></div>
              <div
                className="v-image__image v-image__image--cover"
                style={{
                  backgroundImage:
                    "url('https://drivknuten.se/pub/media/theme_options/default/logo_1.png')",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div
                className="v-responsive__content"
                style={{ width: "1377px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersSection;
