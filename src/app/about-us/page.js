'use client'
import Image from 'next/image';
import styles from './about.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';


function AboutUs() {

  return (
    <Layout>
    <a href="https://ibb.co/BCZkN7Z"><img className={styles.imageAbout} src="https://i.ibb.co/pLzqysz/ab.png" alt="ab" border="0" /></a>
  
   <div className={`${styles.row} ${styles['main-content-wrap']}`}>
 
  <div className={styles['text-content']}>
    <h2>Welcome to Smile Dental Clinic Hyderabad</h2>
    <p>
      Smile Dental Hospital and Implant Centre has two branches, one at Khairtabad established
      <br /> in the year 2008 and the second one at Kompally established in the year 2016.
    </p>
  </div>

 
  <Image
    src="http://www.smile-dental.in/wp-content/uploads/2022/03/checkup-dentist-tool-instrument-young-scaled.jpg"
    alt="Dental Checkup"
    className={styles['image']} width={350} height={400}
    
  />
</div>



      <div className={`${styles.sidebar} col-lg-4`}>
       
        <div className={`${styles.row}`}>
       
          <div className="col-md-4">
            <Link href="/vishalProfile">
            <DoctorProfilePreview
              name="K.Vishal Singh"
              imageUrl="http://www.smile-dental.in/wp-content/uploads/2016/09/drvishalsing.jpg" 
              bio="Dr. K.Vishal Singh did his specialization in the department of Prosthodontics and Implantology."
              
            /></Link>
          </div>
          
         
          <div className="col-md-4">
            <Link href="/pritiProfile" >
            <DoctorProfilePreview
              name="DR. PRITI"
              imageUrl="http://www.smile-dental.in/wp-content/uploads/2016/09/drpriti.jpg" 
              bio="Dr. Priti completed her B.D.S. from Government Dental College and Hospital, Mumbai."
              
            />
            </Link>
          </div>

          
        
          <div className="col-md-4"><Link href="/dineshProfile">
            <DoctorProfilePreview
              name="Dr .Dinesh Singh Chauhan"
              imageUrl="http://www.smile-dental.in/wp-content/uploads/2016/09/drdinesh.jpg"
              bio="Dr. Dinesh Singh Chauhan is an oral and maxillofacial surgeon."
              
            /></Link>
          </div>
        </div>

       
        <div className={`${styles.row}`}>
         
          
          <div className="col-md-4"><Link href="/prashanthProfile">
            <DoctorProfilePreview
              name="Dr .Prashanth Kumar"
              imageUrl="http://www.smile-dental.in/wp-content/uploads/2016/09/doctor.png"
              bio="Dr. Prashant Kumar is an orthodontist and dent facial orthopedician."
              
            /></Link>
          </div>
          
        
          <div className="col-md-4"><Link href="/sreedharProfile">
            <DoctorProfilePreview
              name="DR. SREEDHAR REDDY"
              imageUrl="http://www.smile-dental.in/wp-content/uploads/2016/09/sridhar.jpg"
              bio="Dr . Sreedhar Reddy is specialized in periodontics . He has 16 years of clinical experience."
              
            /></Link>
          </div>
        </div>
      </div>
      
          
      <div className={styles.container}>
      <p className={styles.message}>Health is the most important thing you have in life</p>
      <p className={styles.subMessage}>Contact us now to schedule an appointment.</p>
      <Link href="/contact">
  <button className={styles.button}>Contact Us</button>
</Link>
    </div>
  
    
</Layout>
  );
}




  function DoctorProfilePreview({ name, imageUrl, bio}) {
    return (
      <div className={styles['doctor-profile']} >
        
          <Image src={imageUrl} alt={name} className={styles['doctor-image']} width={300} height={300} />
        
        <div className={styles['doctor-details']}>
          <h4>{name}</h4>
          <p>{bio}</p>
        </div>
      </div>
    );
  };


export default AboutUs;
