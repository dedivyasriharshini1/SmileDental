import styles from '../styles/AboutUs.module.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={`${styles.textContent} vc_column_container col-md-8 col-lg-8`}>
        <div className="wpb_wrapper vc_column-inner">
          <h2 className="vc_custom_heading m-t-md m-b-xs align-left">About Us</h2><br/>
          <div className={`wpb_text_column wpb_content_element ${styles.lead}`}>
            <div className="wpb_wrapper">
              <p>We strive to achieve the highest standard of patient service</p><br/>
            </div>
          </div>
          <div className={`wpb_text_column wpb_content_element ${styles.content}`}>
            <div className="wpb_wrapper">
              <p>Smile Dental Hospital and Implant Centre has two branches one at Khairtabad established in year 2008 and second one at Kompally established in year 2016. Our team of highly skilled dentists in Hyderabad. We offer a wide range of sophisticated dental services. This includes General Dentistry, Cosmetic Dentistry, Pediatric Dentistry, Veneers, Orthodontics, Dental Implants, and Oral Surgery to name a few.</p>
            </div>
          </div>
          <div className={`vc_btn3-container font-weight-bold text-uppercase custom-button vc_btn3-inline ${styles.customButton}`}>
            <a className={`vc_btn3 vc_btn3-shape-round btn btn-borders btn-borders btn-md btn-quaternary ${styles.buttonStyle}`} href="#" title="">Read More</a>
          </div>
        </div>
      </div>
      <div className={`${styles.imageWrapper} vc_column_container col-md-4 col-lg-4`}>
        <div className="wpb_wrapper vc_column-inner">
          <div className={`wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_slideInRight slideInRight wpb_start_animation animated ${styles.image}`}>
            <Image
              width={415}
              height={318}
              src="/about-us.PNG"
              className="vc_single_image-img attachment-full"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
