import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ title: 'StructuredWeb 2016-Present',
              subtitle: 'Software Engineer',
              description: 'I am currently developing features on StructuredWeb\'s platform for high profile clients such as Intel and Amazon in .NET, C#, and ColdFusion.',
              tags: ['C#', '.NET', 'ColdFusion', 'ASP', 'jQuery', 'Oracle SQL']
            },
            { title: 'EJournal Press 2015-2016',
              subtitle: 'Software Development Intern',
              description: "Refactored over 75 intricate Perl subsystems to a new, more configurable system. Worked directly with clients on an intricate system with over 6,000 configuration flags. Took part in the full software development life cycle process (design, code, test, maintain).",
              tags: ['Perl,', 'jQuery,', 'JavaScript,', 'XML,', 'MSSQL,', 'AJAX']
            },
            { title: 'McDonogh School 2014-2015',
              subtitle: 'Assistant Systems Administrator',
              description: "Led project teams ranging from 2-5 people in establishing efficient software solutions. Moved the entire Application and Admissions process at McDonogh School to an online and paperless system I constructed. System handles 800-1000 applicants a year. Maintained full Administrative control over the Windows Server running the website and databases, and trusted with client’s private information as well as handling of their online transactions.",
              tags: ['ColdFusion,', 'jQuery,', 'JavaScript,', 'MSSQL,', 'AJAX']
            },
            { title: 'McDonogh School 2012-2014',
              subtitle: 'Software Development Intern',
              description: "Conducted meetings with clients to ascertain their software needs. Developed online billing system for McDonogh School’s Business Office. Replaced nationally recognized off-the-shelf accounting software with more efficient system built from the ground up. Handles billing and transactions for 1,299 students and 177 faculty members.",
              tags: ['ColdFusion,', 'jQuery,', 'JavaScript,', 'MSSQL,', 'AJAX']
            }];
  },
  afterModel() {
    $(document).attr('title', 'Work | Howard Dean Watts');
  }
});
