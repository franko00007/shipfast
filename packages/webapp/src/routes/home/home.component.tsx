import { Alert, AlertDescription, AlertTitle } from '@sb/webapp-core/components/alert';
import { Link } from '@sb/webapp-core/components/buttons';
import { PageHeadline } from '@sb/webapp-core/components/pageHeadline';
import { PageLayout } from '@sb/webapp-core/components/pageLayout';
import { H4, Paragraph } from '@sb/webapp-core/components/typography';
import { useGenerateLocalePath } from '@sb/webapp-core/hooks';
import { AlertCircle, ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';

import { RoutesConfig } from '../../app/config/routes';

type DashboardItem = {
  title: string;
  subtitle: string;
  link: string;
};

export const Home = () => {
  const intl = useIntl();
  const generateLocalePath = useGenerateLocalePath();
  const dashboardItems: DashboardItem[] = [
    {
      title: intl.formatMessage({
        defaultMessage: 'Payments',
        id: 'Home / Payments / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'Example of single payment form.',
        id: 'Home / Payments / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.finances.paymentConfirm),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'Subscriptions',
        id: 'Home / Subscriptions / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'Example of subscription management.',
        id: 'Home / Subscriptions / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.subscriptions.currentSubscription.index),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'Open AI integration',
        id: 'Home / Open AI / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'SaaS ideas generator as an example of Open AI integration.',
        id: 'Home / Open AI / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.saasIdeas),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'Content items',
        id: 'Home / CMD items / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'Demo of the Contentful integration.',
        id: 'Home / CMD items / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.demoItems),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'Documents',
        id: 'Home / Documents / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'File upload and asset management example.',
        id: 'Home / Documents / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.documents),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'CRUD',
        id: 'Home / CRUD / Title',
      }),
      subtitle: intl.formatMessage({
        defaultMessage: 'Create-Read-Update-Delete module example that is generated by built-in generator.',
        id: 'Home / CRUD / Subtitle',
      }),
      link: generateLocalePath(RoutesConfig.crudDemoItem.list),
    },
  ];

  const renderItem = (item: DashboardItem, key: number) => (
    <Link navLink to={item.link} className="group relative bg-background p-6" key={key}>
      <ArrowUpRight className="absolute right-4 top-4 h-8 w-8 text-muted group-hover:text-muted-foreground" />
      <H4 className="pr-8">{item.title}</H4>
      <Paragraph firstChildMargin={false} className="mt-1 text-sm text-muted-foreground">
        {item.subtitle}
      </Paragraph>
    </Link>
  );

  return (
    <PageLayout className="lg:max-w-4xl">
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'Homepage',
          id: 'Home / page title',
        })}
      />

      <PageHeadline
        header={<FormattedMessage defaultMessage="Dashboard" id="Home / header" />}
        subheader={
          <FormattedMessage
            defaultMessage="Welcome! You're viewing your personal application dashboard example."
            id="Home / subheading"
          />
        }
      />

      <div className="grid w-full grid-cols-1 gap-[1px] bg-muted md:grid-cols-2">
        {dashboardItems.map((item, key) => renderItem(item, key))}
      </div>
    </PageLayout>
  );
};
