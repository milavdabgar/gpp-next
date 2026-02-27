// src/data/announcements.ts
// Announcements data — update this list to add/remove announcements.
// Set hasDetailPage: true and fill `content` to create a dedicated detail page.

export type AnnouncementCategory =
  | 'admission'
  | 'exam'
  | 'recruitment'
  | 'event'
  | 'result'
  | 'scholarship'
  | 'accreditation'
  | 'general';

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  date: string;          // Display date, e.g. "15 Jan 2026"
  isoDate: string;       // ISO date for sorting, e.g. "2026-01-15"
  category: AnnouncementCategory;
  isNew?: boolean;       // Show "NEW" badge
  hasDetailPage: boolean;
  content?: string;      // Full body shown on the detail page (HTML/markdown string)
  attachment?: {
    label: string;
    url: string;
  };
}

export const announcements: Announcement[] = [
  {
    id: 'nba-esar-ec-2026',
    slug: 'nba-accreditation-esar-ec-department-2026',
    title: 'eSAR for NBA Accreditation of Electronics & Communication Engineering Department Submitted to NBA – View Document',
    date: '27 Feb 2026',
    isoDate: '2026-02-27',
    category: 'accreditation',
    isNew: true,
    hasDetailPage: true,
    content: `
      <h2>NBA Accreditation – eSAR Submitted for EC Department</h2>
      <p>
        Government Polytechnic Palanpur is proud to announce that the
        <strong>Electronic Self-Assessment Report (eSAR)</strong> for the
        <strong>NBA (National Board of Accreditation)</strong> accreditation of the
        <strong>Electronics &amp; Communication Engineering (EC) Department</strong>
        has been formally submitted to the NBA.
      </p>
      <h3>About NBA Accreditation</h3>
      <p>
        The National Board of Accreditation (NBA) evaluates and accredits technical programmes
        in India to ensure they meet established quality standards and produce graduates who
        are competent to contribute to society. NBA accreditation is a mark of quality and
        is recognised by employers and academic institutions nationally and internationally.
      </p>
      <h3>About the eSAR</h3>
      <p>
        The Electronic Self-Assessment Report (eSAR) is a comprehensive document prepared
        by the department that evaluates the programme against NBA's criteria covering:
      </p>
      <ul>
        <li>Programme Educational Objectives (PEOs) and Programme Outcomes (POs)</li>
        <li>Curriculum design and delivery</li>
        <li>Course outcomes and attainment</li>
        <li>Faculty qualifications and development</li>
        <li>Infrastructure and learning resources</li>
        <li>Student performance and support</li>
        <li>Governance, institutional support and financial resources</li>
      </ul>
      <p>
        The full eSAR document is available for download below.
      </p>
    `,
    attachment: {
      label: 'Download eSAR Document (PDF)',
      url: '/documents/nba/ec-esar-nba-2026.pdf',
    },
  },
  {
    id: 'adm-2026-27',
    slug: 'admission-open-2026-27',
    title: 'Admissions Open for Academic Year 2026-27 – Apply Now via ACPDC Portal',
    date: '1 Feb 2026',
    isoDate: '2026-02-01',
    category: 'admission',
    isNew: true,
    hasDetailPage: true,
    content: `
      <h2>Admissions Open – 2026-27</h2>
      <p>Government Polytechnic Palanpur invites applications for admission to the following diploma programmes for the academic year 2026-27:</p>
      <ul>
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Electrical Engineering</li>
        <li>Electronics &amp; Communication Engineering</li>
        <li>Computer Engineering</li>
        <li>Information Technology</li>
      </ul>
      <p>Admissions are conducted through the <strong>ACPDC (Admission Committee for Professional Diploma Courses)</strong> centralized counselling process.</p>
      <h3>Important Dates</h3>
      <ul>
        <li>Online Registration: 1 Feb 2026 – 28 Feb 2026</li>
        <li>Merit List Publication: 5 Mar 2026</li>
        <li>Round 1 Counselling: 10–15 Mar 2026</li>
        <li>Admission Confirmation: By 20 Mar 2026</li>
      </ul>
      <p>For more information, visit <a href="https://www.acpdc.in" target="_blank" rel="noopener noreferrer">www.acpdc.in</a> or contact the college office.</p>
    `,
  },
  {
    id: 'exam-tt-mar-2026',
    slug: 'gtu-exam-timetable-march-2026',
    title: 'GTU Winter Examination 2025 – Revised Timetable Published',
    date: '25 Jan 2026',
    isoDate: '2026-01-25',
    category: 'exam',
    isNew: true,
    hasDetailPage: true,
    content: `
      <h2>GTU Winter Examination 2025 – Revised Timetable</h2>
      <p>The Gujarat Technological University (GTU) has published the revised timetable for Winter Examination 2025 for all diploma programmes.</p>
      <p>Students are requested to download the timetable from the GTU portal and note the examination dates carefully.</p>
      <h3>Key Instructions</h3>
      <ul>
        <li>Admit cards will be available 10 days before the examination.</li>
        <li>Students must carry a valid college ID along with the admit card.</li>
        <li>Any grievances regarding the timetable must be reported to the examination cell within 5 days.</li>
      </ul>
    `,
    attachment: {
      label: 'Download Timetable PDF',
      url: '/posts/en',
    },
  },
  {
    id: 'faculty-rect-2026',
    slug: 'faculty-recruitment-2026',
    title: 'Guest Faculty Recruitment 2026 – Applications Invited for Engineering Departments',
    date: '20 Jan 2026',
    isoDate: '2026-01-20',
    category: 'recruitment',
    isNew: true,
    hasDetailPage: true,
    content: `
      <h2>Guest Faculty Recruitment – 2026</h2>
      <p>Applications are invited from eligible candidates for appointment as <strong>Guest Faculty</strong> in the following departments:</p>
      <ul>
        <li>Computer Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Electronics &amp; Communication Engineering</li>
        <li>Applied Science &amp; Humanities</li>
      </ul>
      <h3>Eligibility</h3>
      <p>Candidates must hold a relevant degree (B.E./B.Tech or M.E./M.Tech) with minimum 55% marks. Preference will be given to candidates with teaching and industry experience.</p>
      <h3>How to Apply</h3>
      <p>Send your CV along with copies of certificates to the Principal's office or email to <a href="mailto:principal@gpp.ac.in">principal@gpp.ac.in</a> by 10 Feb 2026.</p>
    `,
  },
  {
    id: 'ssip-2026',
    slug: 'ssip-grant-2026',
    title: 'SSIP Grant 2025-26 – Submit Your Innovation Proposals by 28 February 2026',
    date: '15 Jan 2026',
    isoDate: '2026-01-15',
    category: 'scholarship',
    isNew: false,
    hasDetailPage: true,
    content: `
      <h2>Student Startup and Innovation Policy (SSIP) – Grant Applications 2025-26</h2>
      <p>The SSIP Cell, Government Polytechnic Palanpur, invites students to submit their innovation and startup proposals for funding under the <strong>SSIP Grant 2025-26</strong>.</p>
      <h3>Grant Amount</h3>
      <p>Up to <strong>₹50,000</strong> per student team for prototype development and innovation projects.</p>
      <h3>Eligibility</h3>
      <ul>
        <li>Currently enrolled students of GP Palanpur</li>
        <li>Team size: 2–5 students</li>
        <li>Project must be original and technically feasible</li>
      </ul>
      <h3>Submission</h3>
      <p>Submit your proposal (max 5 pages) to the SSIP Cell office or via the college portal by <strong>28 February 2026</strong>.</p>
    `,
  },
  {
    id: 'techfest-2026',
    slug: 'annual-techfest-2026',
    title: 'Annual Technical Fest "INNOVATE 2026" – Registration Open for All Events',
    date: '10 Jan 2026',
    isoDate: '2026-01-10',
    category: 'event',
    isNew: false,
    hasDetailPage: true,
    content: `
      <h2>INNOVATE 2026 – Annual Technical Festival</h2>
      <p>GP Palanpur is proud to announce <strong>INNOVATE 2026</strong>, our Annual Technical Fest scheduled for <strong>March 15-16, 2026</strong>.</p>
      <h3>Events</h3>
      <ul>
        <li>Project Exhibition</li>
        <li>Coding Competition</li>
        <li>Robotics Challenge</li>
        <li>Technical Quiz</li>
        <li>Technical Paper Presentation</li>
        <li>CAD Design Competition</li>
      </ul>
      <h3>Prizes</h3>
      <p>Attractive prizes and certificates for winners and runners-up in each event.</p>
      <p>Registration forms are available at the college office and online at the college portal.</p>
    `,
  },
  {
    id: 'result-sem3-2025',
    slug: 'gtu-result-sem3-2025',
    title: 'GTU Semester 3 Examination Results Declared – Check Results on GTU Portal',
    date: '5 Jan 2026',
    isoDate: '2026-01-05',
    category: 'result',
    isNew: false,
    hasDetailPage: false,
  },
  {
    id: 'library-new-books',
    slug: 'library-new-books-2026',
    title: 'Library: 250+ New Technical Books Added – Available for Borrowing from 1 Feb 2026',
    date: '2 Jan 2026',
    isoDate: '2026-01-02',
    category: 'general',
    isNew: false,
    hasDetailPage: true,
    content: `
      <h2>New Books Added to Library – 2026</h2>
      <p>The GP Palanpur Library has added over <strong>250 new technical books</strong> across all engineering disciplines. These are available for student borrowing from <strong>1 February 2026</strong>.</p>
      <h3>Highlights</h3>
      <ul>
        <li>Latest editions of core textbooks for all semester subjects</li>
        <li>Reference books for competitive examinations (GATE, GUJCET)</li>
        <li>Technical magazines and journals</li>
        <li>Digital e-book access via the college portal</li>
      </ul>
      <p>Students can borrow up to 3 books at a time for 14 days. Visit the library during working hours (9 AM – 5 PM on working days).</p>
    `,
  },
  {
    id: 'holiday-notice-2026',
    slug: 'holiday-list-2026',
    title: 'Holiday List for Year 2026 Published – View Official Calendar',
    date: '1 Jan 2026',
    isoDate: '2026-01-01',
    category: 'general',
    isNew: false,
    hasDetailPage: true,
    content: `
      <h2>Official Holiday List – 2026</h2>
      <p>The official holiday list for the academic year 2026 has been published. Students and staff are requested to note the holidays and plan accordingly.</p>
      <p>The list is available at the college office and on the notice board. Any changes will be communicated in advance.</p>
    `,
  },
];

/**
 * Returns announcements sorted by date (newest first).
 * Used by the ticker to show the most recent announcements.
 */
export function getSortedAnnouncements(): Announcement[] {
  return [...announcements].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
}

/**
 * Find a single announcement by its slug.
 */
export function getAnnouncementBySlug(slug: string): Announcement | undefined {
  return announcements.find((a) => a.slug === slug);
}
